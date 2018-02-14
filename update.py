# -*- coding: utf-8 -*-
import datetime
import re
def format_time():
    t = datetime.datetime.now()
    s = t.strftime('%Y-%m-%d %H:%M:%S.%f')
    tail = s[-7:]
    f = round(float(tail), 3)
    temp = "%.3f" % f
    return "# Updated: "+"%s%s" % (s[:-7], temp[1:])

if __name__=="__main__":
    file=open("cache.appcache","r")
    data=file.read()
    file.close()
    data=re.sub(r'# Updated:.*',format_time(),data)
    new_file=open("cache.appcache","w")
    new_file.write(data)
    new_file.close()

