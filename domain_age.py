import subprocess
from datetime import datetime

def get_domain_age(domain):
    try:
        whois_output = subprocess.check_output(['whois', domain], stderr=subprocess.STDOUT, text=True)
    except subprocess.CalledProcessError as e:
        print(f"Error: Domain not found or whois server not available for {domain}")
        exit(1)
    
    creation_date = None
    for line in whois_output.split('\n'):
        if "Creation Date" in line:
            creation_date = line.split(":")[1].strip().split("T")[0]
            break

    if creation_date:
        age = get_remaining_time(creation_date)
        print(f"{domain} Created on: {creation_date}\nAge of {domain}: {age}")
    else:
        print(f"Creation date not found for domain: {domain}")

def get_remaining_time(input_date):
    input_date_obj = datetime.fromisoformat(input_date.split('T')[0])
    current_date = datetime.now()
    delta = current_date - input_date_obj
    years = delta.days // 365
    remaining_days = delta.days % 365
    months = remaining_days // 30
    remaining_days %= 30
    return f"{years} years, {months} months, and {remaining_days} days"

if __name__ == "__main__":
    import sys
    if len(sys.argv) != 2:
        print("Usage: python script.py domain_name")
        exit(1)
    
    domain = sys.argv[1]
    get_domain_age(domain)

