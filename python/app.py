# -*- coding: utf-8 -*-

import sqlite3 as sqlite
import random

def main():

	class tableComparator:
		
		def __init__(self):
		#Инициализация подключения к БД в оперативной памяти и курсора БД
			self.conn = sqlite.Connection(':memory:')
			self.cur = self.conn.cursor()
		
		
		def createTable(self):
		#Определение таблиц 1 и 2
			sqlQuery = 'CREATE TABLE table1(value1 int, value2 int);'
			self.cur.execute(sqlQuery)
			sqlQuery = 'CREATE TABLE table2(value1 int, value2 int);'
			self.cur.execute(sqlQuery)
			self.conn.commit()

		def fillTable(self, table, quantity):
		#Данная функция реализует заполнение таблицы по имени, переданному в аргументе table,
		#количеством случайно сгенерированных строк из аргумента quantity.
		#Аргументы connection и cursor используются для вызова методов для работы с СУБД sqlite
		#По выполнению заполнения таблицы, распечатывает содержимое таблицы
			for i in range(1,quantity):
				val1 = random.randint(1,10)
				val2 = random.randint(1,10)
				sqlQuery = "INSERT INTO {} (value1, value2) VALUES ({},{});".format(table, val1, val2)
				self.cur.execute(sqlQuery)
			self.cur.execute('SELECT * FROM {}'.format(table))
			self.conn.commit()
			print(table+'\r',self.cur.fetchall())

		def compareTables(self):
			#Сравнение двух таблиц и запись разницы таблицы 2 и 1 в таблицу 2
			sqlQuery = 	'INSERT INTO table2 SELECT * FROM table1 EXCEPT SELECT * FROM table2'
			self.cur.execute(sqlQuery)
			self.conn.commit()
			self.cur.execute('SELECT * FROM table2')
			print('table2 + table1 excluding values from table1:\r',self.cur.fetchall())
			self.conn.close()


	tabComp = tableComparator()
	tabComp.createTable()
	tabComp.fillTable('table1', 10)
	tabComp.fillTable('table2', 10)
	tabComp.compareTables()

if __name__ == '__main__':
	main()