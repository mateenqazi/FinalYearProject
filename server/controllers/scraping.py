import sys
import json
import re
from os import system, name
import string
import os
import requests
from bs4 import BeautifulSoup


# In[37]:


med_name = sys.argv[1]
type1 = sys.argv[2]

req = requests.get("https://www.google.com/search?q="+med_name+"+price+in+pakistan")
rawData = req._content
data = BeautifulSoup(rawData, "html5lib")
# print(data.prettify())

if type1!="equiqment":
    for d in data.find_all(class_="BNeawe s3v9rd AP7Wnd"):
        price = (d.text.split('p')[0]).strip()
        print(price)
        break;
else:
    print("Nothing")


# In[38]:


req = requests.get("https://www.google.com/search?q="+med_name+"+side+effects")
rawData = req._content
data = BeautifulSoup(rawData, "html5lib")
# print(data.prettify())

for d in data.find_all(class_="BNeawe s3v9rd AP7Wnd"):
    side_effects = (d.text.split('.')[0]).strip()
    print(side_effects)
    break;


# In[39]:


req = requests.get("https://www.google.com/search?q="+med_name+"+uses")
rawData = req._content
data = BeautifulSoup(rawData, "html5lib")

for d in data.find_all(class_="BNeawe s3v9rd AP7Wnd"):
    uses = (d.text.split('.')[0]).strip()
    print(uses)
    break;


# In[24]:


req = requests.get("https://www.google.com/search?q=dawaai"+med_name+"\"")
# print(req)

rawData = req._content
# # print(rawData)

data = BeautifulSoup(rawData, "html5lib")
# print(data.prettify())

for link in data.find_all("a"):
    if(str(link).find("url?") > 0):
        search = str(link)
        break


# In[28]:


s = []
s = search.split('=')[2].split('&')
url = str(s[0])
# print(url)


# In[31]:


if str(url).find("dawaai") > 0:
    req = requests.get(url)
    rawData = req._content
    data = BeautifulSoup(rawData, "html5lib")
    imageLink = ""

    for link in data.find_all("img"):
        if(str(link).find("product") > 0):
            imageLink = str(link).split('=', 3)[3].split('\"')[1]
            print(imageLink)
            break

    if imageLink == "":
        print ("Nothing")

    # else:
    #     response = requests.get(imageLink)
    #     file = open(med_name+"-image.png", "wb")
    #     file.write(response.content)
    #     file.close()
        
else:
    print("Nothing")


# In[ ]:




