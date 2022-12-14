import React from 'react';
import styled from 'styled-components'
import Styles from '../Config/theme/styles';
import font from '../Config/theme/fonts.js'
import H1 from '../Components/H1'
import H3 from '../Components/H3'
import Text from '../Components/Text';
import ImgTop from '../Components/ImgTop';

const Body = styled.div`
padding: ${Styles.padding.lg};
`
const Intro = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`
const SubTitle = styled.p`
font-size: ${font.size.h3};
`
const Paragraph = styled.div`
padding: ${Styles.padding.nm};
`

const CGU = () => {
    return (

        <div>
            <ImgTop src="/images/shovel-planted-soil-garden-flowerpots.jpg" alt="image decorative" />

            <Body>

                <Intro>
                    <H1
                        content="CONDITIONS GÉNÉRALES D'UTILISATION" />
                    <SubTitle>
                        En vigueur au 4 octobre 2022
                    </SubTitle>
                </Intro>

                <Text
                    content="Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par Mon Petit Potager et de définir les conditions d’accès et d’utilisation des services par « l'Utilisateur »."
                />

                <Text
                    content="Les présentes CGU sont accessibles sur le site à la rubrique «CGU»."
                />

                <Paragraph>
                    <H3
                        content="ARTICLE 1 : Les mentions légales" />

                    <Text
                        content="L'édition du site Mon Petit Potager est assurée par le groupe 03 - Calendrier de plantation, de la promo Phénix."
                    />

                </Paragraph>

                <Paragraph>
                    <H3
                        content="ARTICLE 2 : Accès au site" />

                    <Text
                        content="Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge."
                    />

                </Paragraph>

                <Paragraph>
                    <H3
                        content="ARTICLE 3 : Collecte des données" />

                    <Text
                        content="Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés."
                    />

                    <Text
                        content="En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles."
                    />

                </Paragraph>

                <Paragraph>
                    <H3
                        content="ARTICLE 4 : Propriété intellectuelle" />

                    <Text
                        content="Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur."
                    />

                    <Text
                        content="L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite."
                    />

                    <Text
                        content="Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle."
                    />

                    <Text
                        content="Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source."
                    />

                </Paragraph>

                <Paragraph>
                    <H3
                        content="ARTICLE 5 : Responsabilité" />

                    <Text
                        content="Les sources des informations diffusées sur le site Mon Petit Potager sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions."
                    />

                    <Text
                        content="Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site Mon Petit Potager ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site."
                    />

                    <Text
                        content="Le site Mon Petit Potager ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site."
                    />

                    <Text
                        content="La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers."
                    />

                </Paragraph>

                <Paragraph>
                    <H3
                        content="ARTICLE 6 : Liens hypertextes" />

                    <Text
                        content="Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site Mon Petit Potager. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu."
                    />

                </Paragraph>

                <Paragraph>
                    <H3
                        content="ARTICLE 7 : Cookies" />

                    <Text
                        content="L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation."
                    />

                    <Text
                        content="Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur par votre navigateur et qui sont nécessaires à l’utilisation du site Mon Petit Potager. Les cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés pour identifier quelqu’un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent."
                    />

                    <Text
                        content="L’information contenue dans les cookies est utilisée pour améliorer le site Mon Petit Potager."
                    />

                    <Text
                        content="En naviguant sur le site, L’Utilisateur les accepte."
                    />

                    <Text
                        content="L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation."
                    />

                </Paragraph>

                <Paragraph>
                    <H3
                        content="ARTICLE 8 : Droit applicable et juridiction compétente" />

                    <Text
                        content="La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître."
                    />

                    <Text
                        content="Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées inscrites à l’ARTICLE 1."
                    />

                </Paragraph>

            </Body>
        </div>

    )
}

export default CGU;