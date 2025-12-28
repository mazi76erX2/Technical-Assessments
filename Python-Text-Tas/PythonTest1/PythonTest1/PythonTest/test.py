import glob, re


#files = glob.glob('./input/*.txt')
#for file in files:
    #with open(file, 'r', errors='ignore') as f:
        #context = file.readlines()
        #pattern = re.compile(r'\|[A-Z]')
        #matches = pattern.finditer(f)
        #print(new_string)
        #print(matches)
        #pattern = re.compile(r'\.\/file')
    
#files = glob.glob('./input/*.txt')
#with open('files', 'r') as f:
#    with open('output_11', 'w') as op:
        #contents = f.read()
        #pattern = re.compile(r'[A-Z0-9_]{5,16}+\|[A-Z]{4}')
        #pattern = re.compile(r'[A-Z]{4}')
        #matches = pattern.finditer(contents)
#        for file in f:
#            for line in f:
#                op.write(line)

        #for match in matches:
        #    op.write(match)
            #print(match)
#    for line in f:
#        print(line, end='')
#    content = f.read()
#    pattern = re.compile(r'\|[A-Z]')
#    matches = pattern.findall(content)
#    print(matches)

#files = glob.glob("input/*.txt")
#for file in files:
#
#    with open(file,  'r', errors='ignore') as f:
#        content = f.read()
#        print(file)
files = glob.glob("input/*.txt") 
for file in files:
    with open(file, 'r', encoding='ISO-8859-1') as f:
        with open('output.txt', 'w') as output:
            contents = f.read()
            #pattern = re.compile(r'([A-Z0-9]{5,11}_?)')
            #pattern1 = re.compile(r'(CHAR|CLNT|NUMC|DATS|TIMS|CUKY|DEC|CURR)')
            #pattern = re.compile(r'[A-Z0-9]{5,11}_?\s{15,17}\w+X?\s{5,6}\w+\s\w+\s\w+\s\w+')
            pattern = re.compile(r'[A-Z0-9]+_?\s{7,17}[A-Z0-9]+X?\s{5,6}\w+\s\w+\s\w+\s\w+')
            #subbed = re.sub(pattern, "", contents)
            #pattern = re.compile(r'^[A-Z][a-z]+:^[A-Z][a-z]+')
            matches = pattern.finditer(contents)
            #matches = subbed.finditer(contents)

            #matches = pattern.finditer(contents)
            for match in matches:
                new_match = match.group()
                output.write("./{}|{}|\n".format(file, new_match))
            
            #for match in matches1:
            #    new_match = match.group()
            #    output.write("./input\\01BKPF|{}|\n".format(new_match))

            #for match in matches1:
            #    print(match.group())
