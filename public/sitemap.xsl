<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Sitemap — FeetToPixels</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            color: #1a1a2e;
            background: #f8fafc;
            line-height: 1.6;
          }
          .header {
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            color: #fff;
            padding: 2.5rem 1.5rem;
          }
          .header-inner {
            max-width: 1100px;
            margin: 0 auto;
          }
          .header h1 {
            font-size: 1.75rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
          }
          .header p {
            opacity: 0.85;
            font-size: 0.95rem;
          }
          .stats {
            display: flex;
            gap: 2rem;
            margin-top: 1rem;
            font-size: 0.85rem;
            opacity: 0.9;
          }
          .stats span {
            background: rgba(255,255,255,0.15);
            padding: 0.25rem 0.75rem;
            border-radius: 999px;
            font-weight: 500;
          }
          .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 1.5rem;
          }
          .search-bar {
            margin-bottom: 1.25rem;
          }
          .search-bar input {
            width: 100%;
            padding: 0.625rem 1rem;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            font-size: 0.9rem;
            background: #fff;
            transition: border-color 0.2s;
          }
          .search-bar input:focus {
            outline: none;
            border-color: #4f46e5;
            box-shadow: 0 0 0 3px rgba(79,70,229,0.1);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
          }
          thead th {
            background: #f1f5f9;
            padding: 0.75rem 1rem;
            text-align: left;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #64748b;
            border-bottom: 1px solid #e2e8f0;
          }
          tbody tr {
            border-bottom: 1px solid #f1f5f9;
          }
          tbody tr:last-child {
            border-bottom: none;
          }
          tbody tr:hover {
            background: #f8fafc;
          }
          tbody td {
            padding: 0.625rem 1rem;
            font-size: 0.85rem;
          }
          td.url {
            word-break: break-all;
          }
          td.url a {
            color: #4f46e5;
            text-decoration: none;
          }
          td.url a:hover {
            text-decoration: underline;
          }
          .priority-high {
            display: inline-block;
            background: #dcfce7;
            color: #166534;
            padding: 0.125rem 0.5rem;
            border-radius: 999px;
            font-size: 0.75rem;
            font-weight: 600;
          }
          .priority-medium {
            display: inline-block;
            background: #dbeafe;
            color: #1e40af;
            padding: 0.125rem 0.5rem;
            border-radius: 999px;
            font-size: 0.75rem;
            font-weight: 600;
          }
          .priority-low {
            display: inline-block;
            background: #f1f5f9;
            color: #64748b;
            padding: 0.125rem 0.5rem;
            border-radius: 999px;
            font-size: 0.75rem;
            font-weight: 600;
          }
          .langs {
            font-size: 0.75rem;
            color: #94a3b8;
          }
          .footer {
            text-align: center;
            padding: 2rem 1rem;
            font-size: 0.8rem;
            color: #94a3b8;
          }
          @media (max-width: 640px) {
            .stats { flex-wrap: wrap; gap: 0.5rem; }
            thead th:nth-child(3), tbody td:nth-child(3),
            thead th:nth-child(4), tbody td:nth-child(4),
            thead th:nth-child(5), tbody td:nth-child(5) { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="header-inner">
            <h1>FeetToPixels Sitemap</h1>
            <p>Complete index of all pages available for search engines.</p>
            <div class="stats">
              <span><xsl:value-of select="count(sitemap:urlset/sitemap:url)" /> URLs</span>
              <span>15 Languages</span>
              <span>44 Pages</span>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="search-bar">
            <input type="text" id="filter" placeholder="Filter URLs..." onkeyup="filterTable()" />
          </div>
          <table id="sitemap-table">
            <thead>
              <tr>
                <th>#</th>
                <th>URL</th>
                <th>Priority</th>
                <th>Change Freq</th>
                <th>Languages</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:variable name="pos" select="position()" />
                <tr>
                  <td style="color:#94a3b8;font-size:0.75rem;">
                    <xsl:value-of select="$pos" />
                  </td>
                  <td class="url">
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc" />
                    </a>
                  </td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sitemap:priority &gt;= 1.0">
                        <span class="priority-high"><xsl:value-of select="sitemap:priority" /></span>
                      </xsl:when>
                      <xsl:when test="sitemap:priority &gt;= 0.8">
                        <span class="priority-medium"><xsl:value-of select="sitemap:priority" /></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="priority-low"><xsl:value-of select="sitemap:priority" /></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td style="color:#64748b;">
                    <xsl:value-of select="sitemap:changefreq" />
                  </td>
                  <td class="langs">
                    <xsl:value-of select="count(xhtml:link[@rel='alternate'])" /> langs
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
        <div class="footer">
          Generated by FeetToPixels — XML Sitemap with XSLT styling
        </div>
        <script>
          function filterTable() {
            var input = document.getElementById('filter').value.toLowerCase();
            var rows = document.querySelectorAll('#sitemap-table tbody tr');
            for (var i = 0; i &lt; rows.length; i++) {
              var url = rows[i].querySelector('.url').textContent.toLowerCase();
              rows[i].style.display = url.indexOf(input) > -1 ? '' : 'none';
            }
          }
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
