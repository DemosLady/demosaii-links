// Visible view counter. Stores one number in Upstash Redis (Vercel Storage).
// Setup once in Vercel: Storage → Create Database → Upstash Redis → Connect to this project.
// The env vars below are injected automatically; no npm packages needed.
module.exports = async function (req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Access-Control-Allow-Origin', '*');

  var url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  var token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return res.status(200).json({ views: null, note: 'no database connected' });

  var cmd = req.query && req.query.peek ? 'get' : 'incr';
  try {
    var r = await fetch(url + '/' + cmd + '/views:demosaii-links', {
      headers: { Authorization: 'Bearer ' + token }
    });
    var j = await r.json();
    return res.status(200).json({ views: Number(j.result) || 0 });
  } catch (e) {
    return res.status(200).json({ views: null });
  }
};
