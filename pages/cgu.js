import {
    Box,
    Image,
    Input,
    Button,
    Center,
    chakra,
    FormControl,
    FormLabel,
    InputGroup,
    InputLeftElement,
    Text,
    InputRightElement,
    IconButton,
    useDisclosure,
    useBreakpointValue,
    Select,
    Heading
} from "@chakra-ui/react";

export default function CGUPage() {
    return (
        <>
            <Box fontFamily={"marianne"} color={"white"} p={14}>
                <Heading fontFamily={"marianne"} mb={4}>Article 1 : Les mentions légales</Heading>
                <Text fontFamily={"marianne"} mb={4}>
                    L&apos;édition et la direction de la publication du site www.monsite.com est assurée par groupe Nemesis.

                </Text>
                <Text>domicilié 12 rue anatole france.</Text>
                <Text>
                    Numéro de téléphone est 06000000
                </Text>
                <Text>Adresse e-mail contact@nemesis.com</Text>
                <Text mb={8} mt={4}> L&apos;hébergeur du site www.monsite.com est la société nom hébergeur, dont le siège social est situé au 5 rue de paris, avec le numéro de téléphone : 0700000000.</Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 2 : Accès au site</Heading>
                <Text mb={8} mt={4}>Le site www.monsite.com  permet à l&apos;Utilisateur un accès gratuit aux services suivants :
                    Le site internet propose les services suivants :
                    Surveillance des Propriétés des Fichiers, Ajout ou suppression des fichiers à surveiller,  Gestion des Droits d&apos;Accès,  Sécurité et Intégrité des Données,  Interface Utilisateur
                    Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l&apos;Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 3 : Collecte des données</Heading>
                <Text mb={8} mt={4}>Le site assure à l&apos;Utilisateur une collecte et un traitement d&apos;informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l&apos;informatique, aux fichiers et aux libertés.


                    En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l&apos;Utilisateur dispose d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition de ses données personnelles. L&apos;Utilisateur exerce ce droit :
                    ·         par mail à l&apos;adresse email espaceaide@nemesis.com
                    ·         via son espace personnel ;
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 4 : Propriété intellectuelle</Heading>
                <Text mb={8} mt={4}>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l&apos;objet d&apos;une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d&apos;auteur.

                    L&apos;Utilisateur doit solliciter l&apos;autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s&apos;engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.

                    Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l&apos;autorisation expresse de l&apos;exploitant du site Internet constituerait une contrefaçon sanctionnée par l&apos;article L 335-2 et suivants du Code de la propriété intellectuelle.

                    Il est rappelé conformément à l&apos;article L122-5 du Code de propriété intellectuelle que l&apos;Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l&apos;auteur et sa source.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 5 : Responsabilité</Heading>
                <Text mb={8} mt={4}>
                    Les sources des informations diffusées sur le site www.monsite.com sont réputées fiables mais le site ne garantit pas qu&apos;il soit exempt de défauts, d&apos;erreurs ou d&apos;omissions.

                    Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site www.monsite.com ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l&apos;utilisation et de l&apos;interprétation de l&apos;information contenue dans ce site.
                    Le site www.monsite.com ne peut être tenu pour responsable d&apos;éventuels virus qui pourraient infecter l&apos;ordinateur ou tout matériel informatique de l&apos;Internaute, suite à une utilisation, à l&apos;accès, ou au téléchargement provenant de ce site.

                    La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d&apos;un tiers.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 6 : Liens hypertextes</Heading>
                <Text mb={8} mt={4}>
                    Des liens hypertextes peuvent être présents sur le site. L&apos;Utilisateur est informé qu&apos;en cliquant sur ces liens, il sortira du site www.monsite.com. Ce dernier n&apos;a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 7 : Cookies</Heading>
                <Text mb={8} mt={4}>
                    L&apos;Utilisateur est informé que lors de ses visites sur le site, un cookie peut s&apos;installer automatiquement sur son logiciel de navigation.

                    Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l&apos;ordinateur de l&apos;Utilisateur par votre navigateur et qui sont nécessaires à l&apos;utilisation du site www.monsite.com. Les cookies ne contiennent pas d&apos;information personnelle et ne peuvent pas être utilisés pour identifier quelqu&apos;un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l&apos;Utilisateur, d&apos;autres restent.

                    L&apos;information contenue dans les cookies est utilisée pour améliorer le site www.monsite.com.

                    En naviguant sur le site, L&apos;Utilisateur les accepte.
                    L&apos;Utilisateur doit toutefois donner son consentement quant à l&apos;utilisation de certains cookies.
                    A défaut d&apos;acceptation, l&apos;Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être refusées.
                    L&apos;Utilisateur pourra désactiver ces cookies par l&apos;intermédiaire des paramètres figurant au sein de son logiciel de navigation.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 8 : Publication par l&apos;Utilisateur</Heading>
                <Text mb={8} mt={4}>
                    Le site permet aux membres de publier les contenus suivants :
                    modification de données.

                    Dans ses publications, le membre s&apos;engage à respecter les règles de la Netiquette (règles de bonne conduite de l&apos;internet) et les règles de droit en vigueur.

                    Le site peut exercer une modération sur les publications et se réserve le droit de refuser leur mise en ligne, sans avoir à s&apos;en justifier auprès du membre.

                    Le membre reste titulaire de l&apos;intégralité de ses droits de propriété intellectuelle. Mais en publiant une publication sur le site, il cède à la société éditrice le droit non exclusif et gratuit de représenter, reproduire, adapter, modifier, diffuser et distribuer sa publication, directement ou par un tiers autorisé, dans le monde entier, sur tout support (numérique ou physique), pour la durée de la propriété intellectuelle. Le Membre cède notamment le droit d&apos;utiliser sa publication sur internet et sur les réseaux de téléphonie mobile.

                    La société éditrice s&apos;engage à faire figurer le nom du membre à proximité de chaque utilisation de sa publication.

                    Tout contenu mis en ligne par l&apos;Utilisateur est de sa seule responsabilité. L&apos;Utilisateur s&apos;engage à ne pas mettre en ligne de contenus pouvant porter atteinte aux intérêts de tierces personnes. Tout recours en justice engagé par un tiers lésé contre le site sera pris en charge par l&apos;Utilisateur.

                    Le contenu de l&apos;Utilisateur peut être à tout moment et pour n&apos;importe quelle raison supprimé ou modifié par le site, sans préavis.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 9 : Droit applicable et juridiction compétente</Heading>
                <Text mb={8} mt={4}>
                    La législation française s&apos;applique au présent contrat. En cas d&apos;absence de résolution amiable d&apos;un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
                    Pour toute question relative à l&apos;application des présentes CGU, vous pouvez joindre l&apos;éditeur aux coordonnées inscrites à l&apos;ARTICLE 1.
                </Text>
            </Box>
        </>
    )
}