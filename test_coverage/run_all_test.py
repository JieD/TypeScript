import sys
import subprocess

FILE_LIST = "file_list"

with open(FILE_LIST, 'r') as f:
	files_list = f.readlines()

count = 0
for line in files_list:
	print 'istanbul cover built/local/tsc.js {0}'.format(line.strip())
	subprocess.call('istanbul cover built/local/tsc.js {0}'.format(line.strip()))
	subprocess.call('mv coverage coverage_report/coverage{0}'.format(count))
	count += 1
	if count >2:
		sys.exit()

