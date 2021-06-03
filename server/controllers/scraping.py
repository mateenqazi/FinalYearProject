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
med_category = sys.argv[2]
med_type = sys.argv[3]

req = requests.get("https://www.google.com/search?q="+med_name+"+price+in+pakistan")
rawData = req._content
data = BeautifulSoup(rawData, "html5lib")
# print(data.prettify())

if med_category != "equipment":

    price = ""
    if med_type == "price":
        for d in data.find_all(class_="BNeawe s3v9rd AP7Wnd"):
            price = (d.text.split(' ')[1]).strip()
            print(price)
            break;
    
    if price == "":
        print("0")    

    req = requests.get("https://www.google.com/search?q="+med_name+"+side+effects")
    rawData = req._content
    data = BeautifulSoup(rawData, "html5lib")
    
    side_effects = ""
    for d in data.find_all(class_="BNeawe s3v9rd AP7Wnd"):
        side_effects = (d.text.split('.')[0]).strip()
        print(side_effects)
        break;

    if side_effects == "":
        print("NOTHING")

    req = requests.get("https://www.google.com/search?q="+med_name+"+uses")
    rawData = req._content
    data = BeautifulSoup(rawData, "html5lib")

    uses = ""
    for d in data.find_all(class_="BNeawe s3v9rd AP7Wnd"):
        uses = (d.text.split('.')[0]).strip()
        print(uses)
        break;
    
    if uses == "":
        print("NOTHING")
    
else:
    print("0")
    print("Nothing")
    print("Nothing")


req = requests.get("https://www.google.com/search?q=dawaai"+med_name+"\"")
rawData = req._content
data = BeautifulSoup(rawData, "html5lib")
search = ""
for link in data.find_all("a"):
    if(str(link).find("url?") > 0):
        search = str(link)
        break

s = []
s = search.split('=')[2].split('&')
url = str(s[0])
imageLink = ""

if str(url).find("dawaai") > 0:
    req = requests.get(url)
    rawData = req._content
    data = BeautifulSoup(rawData, "html5lib")

    for link in data.find_all("img"):
        if(str(link).find("product") > 0):
            imageLink = str(link).split('=', 3)[3].split('\"')[1]
            if imageLink != "":
                print(imageLink)

            break

    
elif str(url).find("dawaai") <= 0 or imageLink == "":

    if med_category == "equipment":
        imageLink = "https://media.istockphoto.com/vectors/medical-diagnostic-examination-equipment-vector-illustration-of-mri-vector-id1009606614?k=6&m=1009606614&s=612x612&w=0&h=zwJ-N72ZAwZufraq3FzBxoKIS-uJan1qX8Yg0Pu1BPA="
        print (imageLink)
    
    elif med_category == "liquid":
        imageLink = "https://media.istockphoto.com/vectors/brown-plastic-bottle-with-blank-paper-tag-vector-id974153948?k=6&m=974153948&s=612x612&w=0&h=xZi7Pt1zXtzFJMbCpWmMFVyBlw0bjxY0mnnsg0heBDM="
        print(imageLink)

    elif med_category == "tablet":
        imageLink = "https://media.istockphoto.com/vectors/medicine-flat-design-icon-isolated-on-white-background-vector-id1072626580?k=6&m=1072626580&s=612x612&w=0&h=Zt1ICSU0hvGKMgGOlpc_8U4UMwZ7TNDpcUz4HBna6Ko="
        print(imageLink)
    
    elif med_category == "topical":
        imageLink = "https://media.istockphoto.com/vectors/medical-ointment-or-cream-in-plastic-tube-with-cross-isolated-on-vector-id1167626146?k=6&m=1167626146&s=612x612&w=0&h=psNdH5dKPMaGpp4570llRXWvgFcFFVsaO5bWq1psZPM="
        print(imageLink)
    
    elif med_category == "injections":
        imageLink = "https://media.istockphoto.com/vectors/syringe-with-blue-liquid-vector-id493118544?k=6&m=493118544&s=612x612&w=0&h=Ng2wWbC_P4LhfKHqefkd_CAWlvcQlo18xWPlWOsBbqI="
        print(imageLink)

    elif med_category == "inhalers":
        imageLink = "https://media.istockphoto.com/vectors/vector-inhaler-vector-id811811184?k=6&m=811811184&s=612x612&w=0&h=IupmERzTKB0PbQM2PAkbjR9i1Ecu_SXyxSki4l8_Ft8="
        print(imageLink)
    
    elif med_category == "drops":
        imageLink = "https://media.istockphoto.com/vectors/eyedropper-dispensing-water-conserve-water-vector-id521799819?k=6&m=521799819&s=612x612&w=0&h=l4z269XE41r-BWjjLrkAiMGX8b1Hw9rJyNDmC96a1Cw="
        print(imageLink)




