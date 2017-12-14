

charts:
	helm dependency build preparathonserver
	helm dependency build preparathon

clean:
	find ./ -name "*.tgz" -exec rm {} \;
	find ./ -name "*.lock" -exec rm {} \;
