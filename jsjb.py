import sys
import os
import time
import urllib.request
def main(own_directory):
  global gridFiles
  print('JS-JB is loading.')
  sys.path.insert(0, own_directory)
  url = urllib.request.urlopen('http://inky2013.github.io/python/modules.py')
  output = url.read()
  decoded = output.decode("utf-8")
  file = open(own_directory + '/inky2013.py', 'w+')
  file.write(decoded)
  file.close()
  time.sleep(1)
  import inky2013
  #Checking files
  if not os.path.exists(own_directory + '/moduleList'):
    os.makedirs(own_directory + '/moduleList')
  gridFiles = ['code.txt', 'name.txt', 'desc.txt', 'auth.txt', 'url.txt']
  for x in range(len(gridFiles)):
    if not os.path.isfile(own_directory + '/moduleList/' + gridFiles[x]):
      inky2013.getWebFile('http://jsjbdev.github.io/deflists/' + gridFiles[x], own_directory + '/moduleList/' + gridFiles[x], 'w+')
  print('JS-JB Launcher Update 3.0\n------------\nLauncher by inky2013 and acrominer\n------------')
  while True:
    buildGrid(own_directory)
    code = input('Enter module code\n')
    try:
      inky2013.getWebModule(buildGrid_url[buildGrid_code.index(code)], own_directory + '/' + code + '.py')
    except:
      print('Could not download ' + code + '.')
    try:
      modularGame = __import__(code)
      run = True
    except:
      print('Module could not be imported')
    if run == True:
      print('======================================================================================')
      modularGame.main()
    print('======================================================================================')
    

def buildGrid(buildGrid_file):
  global gridFiles
  global buildGrid_code
  global buildGrid_url
  import inky2013
  buildGrid_code =  inky2013.readConfig(buildGrid_file + '/moduleList/' + gridFiles[0])
  buildGrid_name =  inky2013.readConfig(buildGrid_file + '/moduleList/' + gridFiles[1])
  buildGrid_desc =  inky2013.readConfig(buildGrid_file + '/moduleList/' + gridFiles[2])
  buildGrid_auth =  inky2013.readConfig(buildGrid_file + '/moduleList/' + gridFiles[3])
  buildGrid_url =  inky2013.readConfig(buildGrid_file + '/moduleList/' + gridFiles[4])
  gridLen = len(buildGrid_code)
  print('''
|=====|==========================|===================================|===============|
|Code | Name                     | Description                       | Author        |
|=====|==========================|===================================|===============|''')
  
  for x in range(gridLen):
    spaces_name = 26 - len(buildGrid_name[x])
    spaces_desc = 35 - len(buildGrid_desc[x])
    spaces_auth = 15 - len(buildGrid_auth[x])
    print('| ' + buildGrid_code[x] + ' |' + buildGrid_name[x] + (' ' * spaces_name) + '|' + buildGrid_desc[x] + (' ' * spaces_desc) + '|' + buildGrid_auth[x] + (' ' * spaces_auth) + '|')
    print('|-----|--------------------------|-----------------------------------|---------------|')
  
  
  
    
    
    
  
  
