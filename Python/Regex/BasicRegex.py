import re


def get_matching_words(regex):
    words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab",
             "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
    matches = []
    for word in words:
        if re.search(regex, word):
            matches.append(word)
    return matches


# I understand this one
# All words that contain "v"
print get_matching_words(r'v')

# I understand this one
# All words that contain a double-"s"
print get_matching_words(r'ss')

# If you want to return all words ending in a specific character, your put "character$"
# All words that end with an "e"
print get_matching_words(r'e$')

# This works by saying b, then any character '.' then another b
# All words that contain a "b", any character, then another "b"
print get_matching_words(r'b.b')

# This works by saying match on b then another b with at least one character in between
# All words that contain a "b", at least one character, then another "b"
print get_matching_words(r'b.+b')

# This works by saying match on b then another b with any number of chars in between, even zero
# All words that contain a "b", any num of chars including zero then "b"
print get_matching_words(r'b.*b')

# This works, and it never asked to exclude repetition...
# All words that include all five vowels in order
print get_matching_words(r'a.*e.*i.*o.*u')

# I don't know this right now
# All words that only use the letters in "regular expression"
print get_matching_words(r'[]')

# I have the answer, but I don't really know why it's the answer
# All words that contain a double letter
# print get_matching_words(r'(.)\1')
