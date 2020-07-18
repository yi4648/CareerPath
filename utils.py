import time
import pymysql

# def get_time():
#     time_str = time.strftime("%Y{}%m{}%d{} %X")
#     return time_str.format("年","月","日")

def get_conn():
    """
    :return: 连接，游标 关闭,通用查询
    """
    conn = pymysql.connect(host="localhost",
                           user="root",
                           password="123456",
                           db="careerpath",
                           charset="utf8")

    cursor = conn.cursor()#执行完毕返回的结果集默认以元祖显示
    return conn,cursor

def close_conn(conn,cursor):
    cursor.close()
    conn.close()

def query(sql,*args):
    """
    封装通用查询
    :param sql:
    :param args:
    :return: 返回查询带的结果，（（）,（））的形式
    """
    conn,cursor = get_conn()
    cursor.execute(sql,args)#
    res = cursor.fetchall()#
    close_conn(conn,cursor)
    return res

def get_city_data():
   sql="select city,num from city"
   res = query(sql)
   return res

def get_item_data():
   sql="select job,total from item"
   res = query(sql)
   print(res)
   return res

def get_zhaopin_data():
   sql="select job,company,salary from zhaopin limit 15"
   res = query(sql)
   print(res)
   return res

def get_echarts1_data():
   sql="select edu,num from echarts1"
   res = query(sql)
   print(res)
   return res

def get_echarts2_data():
    sql="select position,minpay,maxpay,avgpay from echarts2"
    res = query(sql)
    print(res)
    return res

def get_echarts3_data():
    sql="select company,total,avgpay from echarts3"
    res = query(sql)
    print(res)
    return res

def get_echarts4_data():
    sql="select skill,num from echarts4"
    res = query(sql)
    print(res)
    return res

if __name__ =='__main__':
    get_zhaopin_data()
