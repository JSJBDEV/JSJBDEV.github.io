import tkinter
window = tkinter.Tk()
window.geometry("300x300")
window.wm_iconbitmap('npcfront.ico')
window.title("test window")

def callback():
    print("this is console text")
    label.configure(text="something happened")

photo = tkinter.PhotoImage(file="acro.png")

logo = tkinter.Label(window, image=photo)
label = tkinter.Label(window, text="random text", bg="#aaaaaa")


textentry = tkinter.Entry(window)

button = tkinter.Button(window,text="useless button",command=callback)

logo.pack()
label.pack()
textentry.pack()
button.pack()

window.configure(background="#aaaaaa")

window.mainloop()

