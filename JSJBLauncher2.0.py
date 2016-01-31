import urllib.request
import codecs

url = urllib.request.urlopen('http://jsjbdev.github.io/updates.txt')
output = url.read()
decoded = output.decode("utf-8")
print(decoded)


selection = input("selection ID?: ")
conc = 'http://jsjbdev.github.io/' + selection + '.txt'
url = urllib.request.urlopen(conc)
print(conc)
output = url.read()
decoded = output.decode("utf-8")
conc = selection + ".py"
print(conc)
local = open(conc,"w+")
local.write(decoded)
local.close()
input("file saved. please find it in this directory")
