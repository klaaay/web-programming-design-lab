#! python3
#Copy the html-code you want to analyse then run the program.


import pyperclip
import re

html_label_regex = re.compile(r'(<)(\w*)(>)')

text = str(pyperclip.paste())

matches = []
for groups in html_label_regex.findall(text):
    label = groups[1]
    matches.append(label)


if len(matches) > 0:
    print("There is all the labels.")
    print('\n'.join(set(matches)))
else:
    print("Nothing found.")
