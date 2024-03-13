#!/bin/bash
get_domain_age() {
    domain="$1"
    whois_output=$(whois "$domain")
    if [ $? -ne 0 ]; then
	echo "Domain not found"
	exit 1
    fi
    creation_date=$(echo "$whois_output" | grep -i 'Creation Date' | head -n 1 | awk '{print $3}' | cut -d "T" -f1)
    time_remained=$(remaining_time "$creation_date")
    echo -e "$domain Created on: $creation_date\nAge of $domain: $time_remained"
}
remaining_time() {
    input_date="$1"
    input_timestamp=$(date -d "$input_date" +%s)
    current_timestamp=$(date +%s)
    time_difference=$((current_timestamp - input_timestamp))
    days_passed=$((time_difference / (60 * 60 * 24)))
    years=$((days_passed / 365))
    months=$(( (days_passed % 365) / 30 ))
    remaining_days=$((days_passed % 365))
    months=$((remaining_days / 30))
    remaining_days=$((remaining_days % 30))	
    echo "$years years, $months months, and $remaining_days days"
}
if [ $# -ne 1 ]; then
    echo "Usage: $0 domain_name"
    exit 1
fi
if ! [[ $1 =~ ^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
    echo "Please correct the domain name format"
    exit 1
fi
get_domain_age $1
