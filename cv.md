# **Kirichenko Anastasiia**

![photo](C:\Users\Fhfghf\Desktop\доки_Кириченко\DSC_0332___.jpg)

## Contact information
### Phone
+79535966941
### Email
anastasiiakirichenko97@gmail.com
### nickname on discord server
Nix(@NixInstitoris)

## Education

I have a master's degree in biology in genomics and bioinformatics from the Siberian Federal University in 2021.

## Certifications

["Python Generation: a course for beginners"(certificate): Stepik.](https://stepik.org/cert/1061100)

## Language

English - B2
In 2018 I was a participant of work&trawel, where I had language practice at the everyday level.

## Summary

At university I studied biology and bioinformatics in particular, but during my studies I used only ready-made solutions for my tasks and used publicly available software. But I've always wondered how certain programs work, what's going on behind the scenes, so I started learning python. Studying the programming languages I need for work, I realized, this is what I really want to do, I like to learn something new every day and I like to solve complex problems, so I decided to study new programming languages in order to be able to develop my own soft for the needs of bioinformatics sometime in the future.

## Skills

I know R, Bash shell and Python a little bit.

## My code

#### **This is a Guessing game**

`from random import *
def is_valid(n):# ПроверОчка на вшивость
    if n.isdigit() and 1<=int(n)<=right:
        return True
    else:
        return False

def game(): # Запуск игры
    count=0
    while 5<6:
        count+=1
        n=input('Введите ваше число')
        if is_valid(n)==False:
            print('А может быть все-таки введем целое число от 1 до', right, '?')
        else:
            n=int(n)
            if n<num:
                print('Ваше число меньше загаданного, попробуйте еще разок')
            elif n>num:
                print('Ваше число больше загаданного, попробуйте еще разок')
            else:
                print('Вы угадали, поздравляем!')
                break
    print('Спасибо, что играли в числовую угадайку. Еще увидимся...', 'Количество попыток:'+str(count), sep='\n')

def continue_game(): # Продолжение игры
    cont=input("Хотите возобновить игру? Введите да или нет...")
    while True:
        if cont!='да' or cont!='нет' or cont!='Да' or cont!='Нет':
            cont=input("Хмм.. Непонятно... Так хотите возобновить игру? Введите да или нет...")
        if cont=='нет' or cont=='Нет':
            print('Жаль... Возвращайтесь:)')
            return False
        else:
            return True

for _in range(10**6):
    print('Добро пожаловать в числовую угадайку')
    right=int(input('Укажите максимально возможное рандомное число'))
    num=randrange(1, right+1)
    game()
    if continue_game()==False:
        break
    `

### My projects
