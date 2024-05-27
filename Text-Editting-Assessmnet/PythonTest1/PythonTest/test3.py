import re, glob

#[A-Z][a-zèúíá]?\s[a-z]*\s[a-zèúíá]+

with open('12RBKP.txt', 'r', encoding='ISO-8859-1') as f:
    with open('output.txt', 'w') as output:
        contents = f.read()
        #pattern = re.compile(r'([A-Z0-9]{5,11}_?\s{15,17}\w+X?\s{5,6}\w+\s\w+\s\w+\s\w+)')
        pattern = re.compile(r'Krátký popis:[A-ZÚ][a-zèúžíšáý\.-A-Z\s:]+\s[a-zèúšžýíáA-Z\.-:]+\s')
        pattern1 = re.compile(r'Poèet polí: \d+')
        #pattern1 = re.compile(r'(CHAR|CLNT|NUMC|DATS|TIMS|CUKY|DEC|CURR)')
        #pattern2 = re.compile(r'\d\d?')
        
        #pattern = re.compile(re1 + re2, re.I)
        #matches1 = pattern1.finditer(contents)
        matches = pattern.finditer(contents)
        matches1 = pattern1.finditer(contents)
        
        for match in matches:
            new_match = match.group()
            output.write("./input\\01BKPF|{}\n".format(new_match))

        for match1 in matches1:
            new_match1 = match1.group()
            output.write("./input\\01BKPF|{}\n".format(new_match1))
        
        

        
        
        
        #for matches in matches1:
        #    string_match = match.group()

        #    output.write("{}\n".format(string_match))