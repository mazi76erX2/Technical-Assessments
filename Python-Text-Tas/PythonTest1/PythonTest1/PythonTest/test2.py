import re



#finditer() return a match object; Find all substrings where the RE matches, and returns them as an iterator
#findall() returns a string; Find all substrings where the RE matches, and returns them as a list
#search() returns an object and is not iterable; Scan through a string, looking for any location where this RE matches
#match() looks for patterns only at the begininning of the string not iterable and returns an oject

# All meta characters: . ^ $ * + ? { } [ ] \ | ( )
# . Any character (except newline character)
# ^ Starts with "^hello"
# $ Ends with "world$"
# * Zero or more occurrences "aix*"
# + One or more occurrences "aix+"
# { } Exactly the specified number of occurences "al{2}" 
# [ ] A set of characters "[a-m]"
# \ Special sequence (or escape special characters) "\d"
# | Either or "falls|stays"
# ( ) Capture and group

# MORE SPECIAL CHARACTERS
# \d : Matches any decimal digit; [0-9]
# \D : Matches any non-digit character; 
# \s : Matches any whitespace character; (space " " tab "\t" newline "\n")
# \S : Matches any non-whitespace character;
# \w : Matches any alphanumeric (word) charcter; [a-zA-Z0-9]
# \W : Matches any non-alphanumeric character;
# \b : Matches where the specified character are at the beginning or at the end of a word r"\bain" r"ain\b"
# \B : Matches where the specified characters are present, but NOT at the beginning (or at the end) of a word r"\Bain" r"ain\B"

# Quantifier
# * : 0 or more
# + : 1 or more
# ? : 0 or 1, -> optional character
# {4} : exact number
# {4,6} : range number (min, max)


# functions to modify an object 
# split(): Returns a list where the string has been split at each match 
# sub(): Replaces one or many matches with a string that

# if you want a string from the object just call match.group()

#group() locates the string in the object, start()=> returns the start index of the located string, end()=> return the end index of located string, span()=> start and end indexes where the pattern is located. span return a tuple

#Compilation Flags:

# ASCII, A : Makes several escapes like \w, \b, \s and\d match only on ASCII characters
# DOTALL, S : Make . match any character, including newlines.
# IGNORECASE, I : Do case-insensitive matches.
# LOCALE, L : Do a locale-aware match
# MULTILINE, M : Multi-line matching, affecting ^ and $.
# VERBOSE, X (for 'extended') : Enable verbose REs, which can be organized more cleanly

emails = """
pythonengineer@gmail.com
Python-engineer@gmx.de
python-engineer123@my-domain.org
"""
test_string = 'mpho|123ab|c4567|89ab|c123ABC'
test_string3 = 'hello world, you are the best world'
test_string1 = 'HELLO_ABC_YHE 123_ HEYHO hohey 128 8874 5 411_1 788_999_ 999_989_89664'

urls = """
http://python-engineer.com
https://www.python-engineer.com
http://www.pyeng.net
"""
#pattern = re.compile(r'string', re.I) # re.I complilation flag
pattern = re.compile(r'https?://(www\.)?([a-zA-Z-]+)(\.[a-zA-Z]+)')
#pattern = re.compile(r'([a-zA-Z0-9-]+)@([a-zA-Z-]+)\.([a-z]+)')
#pattern = re.compile(r'world')
#subbed_string = pattern.sub('planet', test_string3)
#splitted = pattern.split(test_string)
#print(subbed_string)
matches = pattern.finditer(urls)
for match in matches:
    print(match.group())

print('-----------------------------')
subbed_urls = pattern.sub(r"\2\3", urls)
print(subbed_urls)