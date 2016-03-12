#--#irrationally complex battle simulator made by Acrogenous_ (James) of conclipsegames.co.uk -license applies-

 

 

 

 

#the main code starts here.

 

import random

 

global power, inv, money, EHP, HP, level, armour, skill, skilln

 

inv = ["DekuStick","OblongShield"]

 

money = int(1000)

 

EHP = int(1000)

 

HP = int(1000)

 

power = int(1)

 

level = int(1)

 

armour = int(1)

 

skill = ("nothing")

 

skilln = int(99)

 

print("Kaixo! young traveller welcome to the Acrogenous_'s battle Simulator!")

 

print("""------------------------------

 

this game supports autosaving. it is saved in a .txt file called

 

save.txt wherever this script is located. it is not particually well encrypted

 

so edit your inventory if you must. currenlty its limited; you will get all your stats back

 

but currently you cannot get your inventory. Remember to drink your tea and return to the menu before you stop!

 

-------------------------------

 

 

 

 

""")

 

#file loaded if possible

 

 

def startmenu():

 

    global HP, save, power, EHP, inv, money, armour, skilln, skill, level

 

    question = input("open save? (yes/no/changelog) (don't do this if you know there isnt a file!)")

 

 

    if question.lower() == "yes":


        try:
            save = (open("save.txt","r"))



            HP = int(save.readline())



            power = int(save.readline())



            level = int(save.readline())



            money = int(save.readline())



            armour = int(save.readline())



            skilln = int(save.readline())



            print("save loaded!")



            save.close()
        except:
            print("it says quite clearly don't do this if there is no file...")

 

      

 

    if question.lower() == "changelog":

 

        changelog()

 

 

 

def changelog():

 

    print("""

 

        #CHANGELOG

 
        # version 1.3.1
        added a failsafe file loading for people who can't read
        
        
        #version 1.3
        # added senpais dojo for special skills

 

        #surprisingly. added special skills

 

        # slightly buffed slam (easier to hit)

 

        #now automatically updates using the JSJB launcher

 

        #as of previous versions added some more enemies

 

        #version 1.2

 

        # yet again fixed the Juh

 

        # added money shown in shop

 

        # made things more "foolproof"

 

        # made the battle better for impatient people (use numbers)

 

        #Version 1.0.1

 

        #fixed juh (again)

 

        #Version 1.0

 

        #+ finalized a few points.

 

        #+ basic file saving

 

        #+ adding armour plating so i dont have to think of people for that

 

        #-+ Juh is to OP please Nerf! (completed)

 

        #Version BETA

 

        #+ inital simulator

 

        #+ added quick battle exit. will be removed in future release!

 

        """)

 

    startmenu()

 

 

startmenu()

 

#main menu function calls other functions#

 

def mainmenu():

 

    global power, inv, money, EHP, HP, level, armour

 

    print("""

 

 

 

 

 

 

 

 

 

           MENU

 

+------------------------------+-----+
|            place             | key |
+------------------------------+-----+
| go to shops                  |   1 |
| go for a walk                |   2 |
| drink tea                    |   3 |
| check your inventory         |   4 |
| go train with senpai /1500x/ |   5 |
+------------------------------+-----+

 

 

 

        """)

 

    goto = input("what would you like to do?")

 

 

 

    if goto == "1":

 

        shop()

 

 

 

 

    if goto == "2":

 

        battle()

 

 

 

 

    if goto == "3":

 

        tea()

 

 

 

      

 

    if goto == "4":

 

        inventory()

 

 

    if goto == "5":

 

        dojo()

 

 

 

 

 

 

 

 

def save():

 

    #file saving#

 

    save = (open("save.txt","w+"))

 

    save.write(str(HP))

 

    save.write("\n")

 

    save.write(str(power))

 

    save.write("\n")

 

    save.write(str(level))

 

    save.write("\n")

 

    save.write(str(money))

 

    save.write("\n")

 

    save.write(str(armour))

 

    save.write("\n")

 

    save.write(str(skilln))

 

    save.close()

 

    print("saved")

 

 

def shop():

 

    global power, inv, money, EHP, HP, level, armour

 

    while True:

 

        print("you have ",money,"x")

 

        buy = input("""welcome to this text based metaphorical shop what would you like to buy?

 

        SHOP

 

+------------+---+
| leave shop | 0 |
+------------+---+

 

+--------------+-------------------------+-----+
|     item     |          price          | key |
+--------------+-------------------------+-----+
| shiny sword  | 50x                     |   1 |
| tea          | 250x                    |   2 |
| armour plate | 250x times amount owned |   3 |
| Health pack  | 250x                    |   4 |
+--------------+-------------------------+-----+

 

+---------------------------+----------+-------+-----+
|           item            | required | price | key |
+---------------------------+----------+-------+-----+
| steam powered machine gun | BenK     | 900x  |   5 |
| FingaBlasta420            | TomP     | 1300x |   6 |
| AniMace                   | Jimothy  | 1100x |   7 |
| HCL Thrower               | Narwhale | 1000x |   8 |
| CSGUN                     | TFGOlad  | 1200x |   9 |
+---------------------------+----------+-------+-----+

 

        """)

 

          

 

        if buy == "0":

 

            break

 

      

 

        if buy == "1":

 

            if money >= 50:

 

                print("SHINY SWORD AQUIRED!")

 

                inv.append("ShinySword")

 

                power = 2

 

                money = money - 50

 

 

        if buy == "2":

 

            if money >= 250:

 

                print("TEA AQUIRIED!")

 

                inv.append("Tea")

 

                money = money - 250

 

 

        if buy == "5":

 

            if money >= 200:

 

                if "BenK" in inv:

 

                    print("OBTAINED STEAM POWERED MACHINE GUN!")

 

                    power = 5

 

 

        if buy == "3":

 

            if money >= 250 * armour:

 

                print("AN ARMOUR PLATE AQUIRIED!")

 

                inv.append("ArmourPlate")

 

                armour = armour + 1

 

                money = money - 250 * armour

 

                HP += 1000

 

 

        if buy == "4":

 

            if money >= 250:

 

                inv.append("hpack")

 

                print("OBTAINED A HEALTH PACK!")

 

                money = money - 250

 

 

        if buy == "6":

 

            if money >= 1300:

 

                if "TomP" in inv:

 

                    print("OBTAINED DA FINGABLASTA420!")

 

                    power = 9

 

                    money = money - 1300

 

                      

 

        if buy == "7":

 

            if money >= 1100:

 

                if "Jimothy" in inv:

 

                    print("OBTAINED THE ANIMACE!!")

 

                    power = 7

 

                    money = money - 1100

 

 

        if buy == "8":

 

            if money >= 1000:

 

                if "Narwhale" in inv:

 

                    print("OBTAINED THE HClTHROWER!!!")

 

                    power = 6

 

                    money = money - 1000

 

 

        if buy == "9":

 

            if money >= 1200:

 

                if "tfgolad" in inv:

 

                    print("OBTAINED THE CSGUN!")

 

                    power = 8

 

                    money = money - 1200

 

 

 

def battle():

 

    global power, inv, money, EHP, HP, level, armour, skill

 

    penemy = ["JUH BAYLE","GENERIC ORC","NERD CONGLOMERATE","FORBESBRY","AQUAMARINE SLIME"]

 

    cenemy = penemy[random.randint(0,4)]

 

    print("A WILD ",cenemy, " APPEARED!")

 

    EHP = 500 * level

 

    while True:

 

      

 

        print("enemy hp =",EHP)

 

        print("your hp =",HP)

 

        print("------------------------------------")

 

        attackType = input("""

 

+---------+
1 - quick |
+---------+
2 - slash |
+---------+
3 - slam  |
+---------+
4 - heal  |
+---------+
5 - skill |
+---------+

   """)

 

        luck = random.randint(1,1000)

 

  

 

        if attackType.lower() == "1":

 

            if luck >= 100:

 

                EHP = EHP - (10 * power)

 

                print(10 * power, "DAMAGE")

 

 

        if attackType.lower() == "2":

 

            if luck >= 300:

 

                EHP = EHP - (50 * power)

 

                print(50 * power, "DAMAGE")

 

 

        if attackType.lower() == "4":

 

            if "hpack" in inv:

 

                HP = HP + 250

 

 

 

        if attackType.lower() == "3":

 

            if luck >= 600:

 

                EHP = EHP - (100 * power)

 

                print("A LOT OF DAMAGE")

 

 

        if attackType.lower() == "5":

 

            if skill == "fireburst":

 

                EHP = EHP - (power * armour)

 

                print(power + armour," DAMAGE")

 

            if skill == "dpunch":

 

                EHP = EHP * 0.6

 

                print("SOME AMOUNT OF DAMAGE")

 

            if skill == "under900":

 

                if luck >= 700:

 

                    EHP = EHP - random.randint(1,900)

 

            if skill == "RKO":

 

                if luck >= 800:

 

                    EHP = EHP - 99999999999999

 

            if skill == "hpunch":

 

                HP = HP + 200

 

                EHP = EHP - 50

 

                  

 

        juhpower = random.randint(1,25)

 

        juhpower = juhpower * level

 

        print("ENEMY DOES",juhpower,"DAMAGE")

 

        print("------------------------------------")

 

        HP = HP - juhpower

 

        if HP <= 0:

 

            print("alas you apear to of been beaten. I suppose you should play again?")

 

            input("press enter to exit")

 

            int("THIS ERROR IS INTENTIONAL RESTART FROM A SAVE!")

 

        if EHP <= 0:

 

         print("you win")

 

         print("gained 500x")

 

         level = level + 1

 

         print("next level: level",level)

 

         money = money + 500

 

         input("press enter")

 

         break

 

 

def tea():

 

    global power, inv, money, EHP, HP, level, armour

 

    if "Tea" in inv:

 

            inv.remove("Tea")

 

            epicness = random.randint(1,15)

 

            if epicness == 1:

 

                print("you drink some tea and a BenK apeared")

 

                print("obtained a rare BenK!")

 

                inv.append("BenK")

 

            if epicness == 2:

 

                print("you drink some tea and a TomP apeared")

 

                print("obtained a rare TomP!")

 

                inv.append("TomP")

 

            if epicness == 3:

 

                print("you drink tea and a Jimothy apeared")

 

                print("obtained a rare Jimothy!")

 

                inv.append("Jimothy")

 

            if epicness == 4:

 

                print("You drink tea and a tame Narwhale apeared")

 

                print("obtained a tame Narwhale!")

 

                inv.append("Narwhale")

 

            if epicness == 5:

 

                print("you drink tea and a TFGO Lad Appears!")

 

                print("OBTAINED THE TFGO LAD!")

 

                inv.append("tfgolad")

 

            elif epicness >= 6:

 

                print("it appears that you did not buy the right tea good sir/ma'm.")

 

                print("maybe if you go back to the shop and buy more you may get some helpers?")

 

    else:

 

        print("YOU FOOL YOU HAVE NO TEA!")

 

 

def fixload():

 

    global skill, skilln

 

    if str(skilln) == "0":

 

        skill = "fireburst"

 

    if str(skilln) == "1":

 

        skill = "dpunch"

 

    if str(skilln) == "2":

 

        skill = "under900"

 

    if str(skilln) == "3":

 

        skill = "RKO"

 

    if str(skilln) == "4":

 

        skill = "hpunch"

 

              

 

def inventory():

 

    global power, inv, money, EHP, HP, level, armour

 

    fixload()

 

    print("inventory: ",inv)

 

    print("power: ",power)

 

    print("HP: ",HP)

 

    print("money: ",money)

 

    print("level: ",level)

 

    print("armour level: ",armour)

 

    print("current skill: ", skill,"(id:",skilln,")")

 

 

def dojo():

 

    global money, skill, skilln

 

    if money >= 1500:

 

        money = money - 1500

 

        pskills = ["fireburst","dpunch","under900","RKO","hpunch"]

 

        rskilln = random.randint(0,4)

 

        rskill = pskills[rskilln]

 

       

 

        print("welcome to the dojo here you can learn a special skill. but only one at a time")

 

        print("the awesomeness would overpower you otherwise")

 

        print("anyway by the power of RNJesus I could teach you:",rskill)

 

        print("your current skill is:",skill)

 

        choice = input("(y/n): ")

 

        if choice == "y":

 

            skill = rskill

 

            skilln = rskilln

 

            print("NEW SKILL OBTAINED!")

 

            print("now good day.")

 

        else:

 

            print("well. come again soon!")

 

        fixload()

 

    else:

 

        print("come back when you have more money.")

 

 

 

 

#STUFF HAPPENS BEYOND THIS POINT!#

 

 

while True:

 

    mainmenu()

 

    save()

 

    fixload()

 

  

 

 

 

  

 

 

#MADE

 

#BY

 

#ACRO!
