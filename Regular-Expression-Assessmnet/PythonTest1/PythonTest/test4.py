import re, glob

files = glob.glob('input/*.txt')
for f in files:
    #outline = open(f, 'r', encoding='ISO-8859-1')
    with open(f, 'r', encoding="ISO-8859-1") as file:
        with open('output1', 'w', encoding='UTF-8') as output:
            data = file.read()
            pattern = re.compile(r'[A-Z0-9]{5,11}_?\s{15,17}\w+X?\s{5,6}\w+\s\w+\s\w+\s\w+')
            matches = pattern.finditer(data)
            for match in matches:
                new_match = match.group()
                output.write("./{}|{}|\n".format(file, new_match))
        #print('{}'.format(f))
        #outline.close()
        #for line in data:
        #    with open('output1', 'w', encoding='UTF-8') as output:
        #        pattern = re.compile(r'[A-Z0-9]{5,11}_?\s{15,17}\w+X?\s{5,6}\w+\s\w+\s\w+\s\w+')
        #        matches = pattern.finditer(line)
        #        for match in matches:
        #            new_match = match.group()
        #            output.write("./{}|{}|\n".format(f, new_match))
