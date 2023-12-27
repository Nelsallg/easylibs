.PHONY: init create list exec run publish

# Initialise le monorepo avec Lerna
init:
	lerna init

# Crée un nouveau package dans le monorepo
create:
	lerna create $(name)

# Affiche la liste des packages dans le monorepo
list:
	lerna ls

# Exécute une commande dans tous les packages
exec:
	lerna exec -- ${commande}

# Exécute une commande spécifique dans tous les packages
run:
	lerna run ${commande}
test:
	lerna run test --scope=${lib}

# Publie les packages modifiés dans le monorepo
publish:
	lerna publish --version ${version} ${path}

# Compile une bibliothèque spécifique (remplacer @monorepo/library1 par le nom de votre bibliothèque)
build-lib:
	lerna run build --scope=${lib}

build-lib-c:
	lerna run tsc --scope=${lib}

build:
	lerna run build --scope=${lib}
