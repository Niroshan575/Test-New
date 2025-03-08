const os = require('os');

async function pingCommand(sock, chatId) {
    try {
        const start = Date.now();
        
        // Get system info
        const uptime = process.uptime();
        const ram = (os.totalmem() - os.freemem()) / (1024 * 1024 * 1024);
        const platform = os.platform();
        
        // Calculate ping
        await sock.sendMessage(chatId, { text: '🌀 *Performing System Analysis...*' });
const end = Date.now();
const ping = end - start;

const message = 
`╔═════════════≪ •❈• ≫═════════════╗
   🌟 *𝐍𝐈𝐑𝐎𝐒𝐇𝐀𝐍 𝐌𝐃 𝐒𝐘𝐒𝐓𝐄𝐌 𝐃𝐈𝐀𝐆𝐍𝐎𝐒𝐓𝐈𝐂𝐒* 🌟

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
🚀 *Response Velocity*: ${ping}ms 
   ${'▰'.repeat(Math.min(10, Math.floor(ping/50))}${'▱'.repeat(10-Math.min(10, Math.floor(ping/50)))}

🖥️ *System Architecture*: ${platform}
   ${platform.includes('Windows') ? '⊞ 𝙒𝙞𝙣𝙙𝙤𝙬𝙨' : '🐧 𝙇𝙞𝙣𝙪𝙭'}

⏳ *Operational Duration*: 
   ${formatTime(uptime).replace(/ /g, ' ➞ ')}

🧠 *Memory Consumption*: ${ram.toFixed(2)}GB
   ${'⬤'.repeat(Math.floor(ram))}${'◯'.repeat(5-Math.floor(ram))}
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

╚═══════════≪ •❈• ≫════════════╝
*"𝐍𝐈𝐑𝐎𝐒𝐇𝐀𝐍 𝐌𝐃 👨‍💻"*`;
        await sock.sendMessage(chatId, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363341377761097@newsletter',
                    newsletterName: 'NIROSHAN MD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in ping command:', error);
        await sock.sendMessage(chatId, { text: 'Failed to get ping status.' });
    }
}

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds = seconds % (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds = seconds % (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0) time += `${seconds}s`;

    return time.trim();
}

module.exports = pingCommand;