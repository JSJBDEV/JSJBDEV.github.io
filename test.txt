def mainmenu():
    global power, inv, money, EHP, HP, level, armour
    print("""
           MENU
    ---------------------
    1 - Go to the shops
    2 - go for a walk
    3 - drink tea
    4 - check inventory
    ---------------------




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
