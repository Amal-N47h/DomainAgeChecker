const { execSync } = require('child_process');

function getDomainAge(domain) {
    try {
        const whoisOutput = execSync(`whois ${domain}`, { encoding: 'utf-8' });
        const creationDateMatch = whoisOutput.match(/Creation Date: (.+)/i);
        if (!creationDateMatch) {
            console.error(`Error: Creation date not found for domain ${domain}`);
            process.exit(1);
        }
        const creationDate = creationDateMatch[1].split('T')[0]; // Remove time portion
        const age = getRemainingTime(creationDate);
        console.log(`${domain} Created Date: ${creationDate}\nAge of ${domain}: ${age}`);
    } catch (error) {
        console.error(`Error: Domain not found or whois server not available for ${domain}`);
        process.exit(1);
    }
}

function getRemainingTime(inputDate) {
    const inputDateObj = new Date(inputDate);
    const currentDate = new Date();
    const diffInMs = currentDate - inputDateObj;
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffInDays / 365);
    const remainingDays = diffInDays % 365;
    const months = Math.floor(remainingDays / 30);
    const remainingDaysOfMonth = remainingDays % 30;
    return `${years} years, ${months} months, and ${remainingDaysOfMonth} days`;
}

if (process.argv.length !== 3) {
    console.error("Usage: node script.js domain_name");
    process.exit(1);
}

const domain = process.argv[2];
getDomainAge(domain);
