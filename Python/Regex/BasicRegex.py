import re


def get_matching_words(regex):
    words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab",
             "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
    matches = []
    for word in words:
        if re.search(regex, word):
            matches.append(word)
    return matches


# All words that contain "v"
print get_matching_words(r'v')

# All words that contain a double-"s"
print get_matching_words(r'ss')

# All words that end with an "e"
print get_matching_words(r'e$')

# All words that contain a "b", any character, then another "b"
print get_matching_words(r'b.b')

# All words that contain a "b", at least one character, then another "b"
print get_matching_words(r'b.+b')

# All words that contain a "b", any num of chars including zero then "b"
print get_matching_words(r'b.*b')

# All words that include all five vowels in order
print get_matching_words(r'a.*e.*i.*o.*u')

# All words that only use the letters in "regular expression"
print get_matching_words(r'[regularxpsion]')

# All words that contain a double letter
print get_matching_words(r'(\w)\1')
