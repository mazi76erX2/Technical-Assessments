import glob
import re

for filename in glob.glob('./input/*'):
    with open(filename, 'r') as f_in:
        lines = f_in.readlines()

        output_filename1 = f'output_1.txt'
        output_filename2 = f'output_2.txt'
        output_filename3 = f'output_3.txt'

with open(output_filename1, 'a') as f_out1, open(output_filename2, 'a') as f_out2, open(output_filename3, 'a') as f_out3:
    for line in lines:
        match = re.match(r'|(.+?)|(.+?)|(\d+)|(.?)|', line)
    if match:
        f_out1.write(f'{filename}|{match.group(1)}|{match.group(2)}|{match.group(3)}|{match.group(4)}|\n')
    elif re.match(r'.?Krátký popis:(.+?)\n', line):
        f_out2.write(f'{filename}|          {line.strip()}|\n')
    elif re.match(r'.?Počet polí:\s(\d+)', line):
        f_out2.write(f'{filename}|          {line.strip()}|\n')
    else:
        f_out3.write(line)
