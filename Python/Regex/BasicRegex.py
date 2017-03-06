import re


def get_matching_words(regex):
    words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab",
             "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
    matches = []
    for word in words:
        if re.search(regex, word):
            matches.append(word)
    return matches


# I understnad this one
print 'All words that contain "v"'
print get_matching_words(r'v')

# I understand this one
print 'All words that contain a double-"s"'
print get_matching_words(r'ss')

# I have the answer, but I have no idea why it works
print 'All words that end with an "e"'
print get_matching_words(r'\b(\w+e)\b')

# This seems to work, but I don't really know why
print 'All words that contain a "b", any character, then another "b"'
print get_matching_words(r'b.b')

# This seems to work, but I don't really know why
print 'All words that contain a "b", at least one character, then another "b"'
print get_matching_words(r'b\wb')

# This seems to work, but I don't really know why
print 'All words that contain a "b", any number of characters (including zero), then another "b"'
print get_matching_words(r'b.*b')

# This seems to work, but I don't really know why
print 'All words that include all five vowels in order'
print get_matching_words(r'a.*e.*i.*o.*u')

# I don't know this right now
print 'All words that only use the letters in "regular expression" (each letter can appear any number of times)'

# I have the answer, but I don't really know why it's the answer
print 'All words that contain a double letter'
print get_matching_words(r'(.)\1')
