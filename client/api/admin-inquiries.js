import { getInquiries, updateInquiryStatus } from './lib/db.js';

export default async function handler(req, res) {
  // Verify Admin Authentication Token from request header
  const adminToken = req.headers['x-admin-token'] || req.headers['authorization']?.replace('Bearer ', '');
  const expectedToken = process.env.ADMIN_SECRET_TOKEN || 'netcradus_admin_secure_token_2026';

  if (!adminToken || adminToken !== expectedToken) {
    return res.status(401).json({ success: false, error: 'Unauthorized access. Valid admin credentials required.' });
  }

  if (req.method === 'GET') {
    try {
      const inquiries = await getInquiries();
      // Remove raw base64 contents from list view for lightweight transfer
      const sanitizedInquiries = inquiries.map((item) => {
        if (item.attachment && item.attachment.content) {
          const { content, ...restAttachment } = item.attachment;
          return { ...item, attachment: restAttachment };
        }
        return item;
      });

      return res.status(200).json({ success: true, inquiries: sanitizedInquiries });
    } catch (err) {
      console.error('[Admin API GET Error]', err);
      return res.status(500).json({ success: false, error: 'Failed to retrieve inquiries.' });
    }
  }

  if (req.method === 'PATCH') {
    try {
      let bodyData = req.body;
      if (typeof bodyData === 'string') {
        bodyData = JSON.parse(bodyData);
      }
      const { id, status } = bodyData || {};

      if (!id || !status) {
        return res.status(400).json({ success: false, error: 'Inquiry ID and new status are required.' });
      }

      const updated = await updateInquiryStatus(id, status);
      if (updated) {
        return res.status(200).json({ success: true, message: `Inquiry ${id} status updated to ${status}.` });
      }
      return res.status(404).json({ success: false, error: 'Inquiry record not found.' });
    } catch (err) {
      console.error('[Admin API PATCH Error]', err);
      return res.status(500).json({ success: false, error: 'Failed to update inquiry status.' });
    }
  }

  res.setHeader('Allow', ['GET', 'PATCH']);
  return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
}
