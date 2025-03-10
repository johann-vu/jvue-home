
.PHONY: all
all: build

.PHONY: build
build:
	cd projects && 
	gomplate -c .=online-furniture-storage.yml -f template.html -o online-furniture-storage.html
