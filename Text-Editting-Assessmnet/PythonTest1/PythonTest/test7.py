import re, glob


#files = glob.glob('input/*.txt')
with open('14REGUP.txt', 'r', encoding='ISO-8859-1') as f:
    with open('output33', 'w') as output:
        content = f.read()
        pattern = re.compile(r'([A-Z0-9]+_?\s{7,17})([A-Z0-9]+X?\s{5,6})(\w+\s)(\w+\s\w+\s\w+)')  
        matches = pattern.finditer(content)
        for match in matches:
            new_match1 = match.group(1)
            new_match2 = match.group(2)
            new_match3 = str(match.group(3))
            new_match4 = match.group(4)

            subbed1 = pattern.sub(new_match1, '', content)
            subbed2 = pattern.sub(new_match2, '', content)
            subbed3 = pattern.sub(new_match3, '', content)
            subbed4 = pattern.sub(new_match4, '', content)
            output.write(subbed1, subbed2, subbed3,subbed4)
            #subbed = pattern.sub(new_match, '', content)
            #output.write(subbed)


