import utils

conn, cursor = utils.get_conn()

file = open("static/data/zongshu.txt", 'r')
lines = file.readlines()
sql = "truncate table item"
cursor.execute(sql)
conn.commit()
if lines:
    for line in lines:
        line = line.strip('\n').split(' ')
        x = list((line[0], line[1]))
        sql = "insert into item(job,total) values(%s,%s)"
        try:
            cursor.execute(sql, x)
            conn.commit()
        except:
            conn.rollback()
file.close()

file = open("static/data/zhaopin.txt", 'r')
lines = file.readlines()
sql = "truncate table zhaopin"
cursor.execute(sql)
conn.commit()
if lines:
    for line in lines:
        line = line.strip('\n').split(' ')
        x = list((line[0],line[1],line[2]))
        sql = "insert into zhaopin(job,company,salary) values(%s,%s,%s)"
        try:
            cursor.execute(sql, x)
            conn.commit()
        except:
            conn.rollback()
file.close()

file = open("static/data/xueli.txt", 'r')
lines = file.readlines()
sql = "truncate table echarts1"
cursor.execute(sql)
conn.commit()
if lines:
    for line in lines:
        line = line.strip('\n').split(' ')
        x = list((line[0], line[1]))
        sql = "insert into echarts1(edu,num) values(%s,%s)"
        try:
            cursor.execute(sql, x)
            conn.commit()
        except:
            conn.rollback()
file.close()

file = open("static/data/gongzi.txt", 'r')
lines = file.readlines()
sql = "truncate table echarts2"
cursor.execute(sql)
conn.commit()
if lines:
    for line in lines:
        line = line.strip('\n').split(' ')
        x = list((line[0], line[1], line[2], line[3]))
        sql = "insert into echarts2(position,minpay,maxpay,avgpay) values(%s,%s,%s,%s)"
        try:
            cursor.execute(sql, x)
            conn.commit()
        except:
            conn.rollback()
file.close()

file = open("static/data/gongsi.txt", 'r')
lines = file.readlines()
sql = "truncate table echarts3"
cursor.execute(sql)
conn.commit()
if lines:
    for line in lines:
        line = line.strip('\n').split(' ')
        x = list((line[0], line[1], line[2]))
        sql = "insert into echarts3(company,total,avgpay) values(%s,%s,%s)"
        try:
            cursor.execute(sql, x)
            conn.commit()
        except:
            conn.rollback()
file.close()

file = open("static/data/jingyan.txt", 'r')
lines = file.readlines()
sql = "truncate table echarts4"
cursor.execute(sql)
conn.commit()
if lines:
    for line in lines:
        line = line.strip('\n').split(' ')
        x = list((line[0], line[1]))
        sql = "insert into echarts4(skill,num) values(%s,%s)"
        try:
            cursor.execute(sql, x)
            conn.commit()
        except:
            conn.rollback()
file.close()



file = open("static/data/city.txt", 'r')
sql = "truncate table city"
cursor.execute(sql)
lines = file.readlines()
if lines:
    for line in lines:
        line = line.strip('\n').split(' ')
        x = list((line[0],line[1]))
        sql = "insert into city(city,num) values(%s,%s)"
        try:
            cursor.execute(sql, x)
            conn.commit()
        except:
            conn.rollback()
file.close()
# sql = " UPDATE city,tb_city SET tb_city.count=city.num where tb_city.shortname=city.city"
# cursor.execute(sql)
# conn.commit()

utils.close_conn(conn, cursor)
