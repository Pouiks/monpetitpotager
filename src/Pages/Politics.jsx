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
const Li = styled.li`
font-size: ${font.size.paragraph};
`
const ParagraphTitle = styled.p`
font-size: ${font.size.description};
`
const Politics = () => {
    return (
        <div>
            <ImgTop src="/images/shovel-planted-soil-garden-flowerpots.jpg" alt="image decorative" />

            <Body>
                <Intro>
                    <H1
                        content="POLITIQUE DE CONFIDENTIALITÉ" />
                    <SubTitle>Mon Petit Potager</SubTitle>
                    <i>o'Clock</i>
                </Intro>

                <Paragraph>
                    <H3
                        content="Le but de cette politique de confidentialité" />
                    <Text
                        content="Le but de cette politique de confidentialité est d'informer les utilisateurs de notre site des données personnelles que nous recueillerons ainsi que les informations suivantes, le cas échéant :"
                    />
                    <ol>
                        <Li>
                            Les données personnelles que nous recueillerons
                        </Li>
                        <Li>
                            L'utilisation des données recueillies
                        </Li>
                        <Li>
                            Qui a accès aux données recueillies
                        </Li>
                        <Li>
                            Les droits des utilisateurs du site
                        </Li>
                        <Li>
                            La politique de cookies du site
                        </Li>
                    </ol>

                    <Text
                        content="Cette politique de confidentialité fonctionne parallèlement aux conditions générales d'utilisation de notre site."
                    />
                </Paragraph>

                <Paragraph>
                    <H3
                        content="Lois applicables" />

                    <Text
                        content="Conformément au Règlement général sur la protection des données (RGPD), cette politique de confidentialité est conforme aux règlements suivants.
                    Les données à caractère personnel doivent être :"
                    />

                    <ol>
                        <Li>
                            traitées de manière licite, loyale et transparente au regard de la personne concernée (licéité, loyauté, transparence) ;
                        </Li>
                        <Li>
                            collectées pour des finalités déterminées, explicites et légitimes, et ne pas être traitées ultérieurement d'une manière incompatible avec ces finalités; le traitement ultérieur à des fins archivistiques dans l'intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques n'est pas considéré, conformément à l'article 89, paragraphe 1, comme incompatible avec les finalités initiales (limitation des finalités) ;
                        </Li>
                        <Li>
                            adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées (minimisation des données) ;
                        </Li>
                        <Li>
                            exactes et, si nécessaire, tenues à jour; toutes les mesures raisonnables doivent être prises pour que les données à caractère personnel qui sont inexactes, eu égard aux finalités pour lesquelles elles sont traitées, soient effacées ou rectifiées sans tarder (exactitude) ;
                        </Li>
                        <Li>
                            conservées sous une forme permettant l'identification des personnes concernées pendant une durée n'excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées; les données à caractère personnel peuvent être conservées pour des durées plus longues dans la mesure où elles seront traitées exclusivement à des fins archivistiques dans l'intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques conformément à l'article 89, paragraphe 1, pour autant que soient mises en &oelig;uvre les mesures techniques et organisationnelles appropriées requises par le règlement afin de garantir les droits et libertés de la personne concernée (limitation de la conservation) ;
                        </Li>
                        <Li>
                            traitées de façon à garantir une sécurité appropriée des données à caractère personnel, y compris la protection contre le traitement non autorisé ou illicite et contre la perte, la destruction ou les dég&acirc;ts d'origine accidentelle, à l'aide de mesures techniques ou organisationnelles appropriées (intégrité et confidentialité).
                        </Li>
                    </ol>

                    <Text
                        content="Le traitement n'est licite que si, et dans la mesure où, au moins une des conditions suivantes est remplie :"
                    />

                    <ol>
                        <Li> la personne concernée a consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques ;
                        </Li>
                        <Li> le traitement est nécessaire à l'exécution d'un contrat auquel la personne concernée est partie ou à l'exécution de mesures précontractuelles prises à la demande de celle-ci ;
                        </Li>
                        <Li> le traitement est nécessaire au respect d'une obligation légale à laquelle le responsable du traitement est soumis ;
                        </Li>
                        <Li> le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d'une autre personne physique ;
                        </Li>
                        <Li> le traitement est nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable du traitement ;
                        </Li>
                        <Li> le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement ou par un tiers, à moins que ne prévalent les intérêts ou les libertés et droits fondamentaux de la personne concernée qui exigent une protection des données à caractère personnel, notamment lorsque la personne concernée est un enfant.
                        </Li>
                    </ol>

                </Paragraph>

                <Paragraph>
                    <H3
                        content="Consentement" />

                    <Text
                        content="Les utilisateurs conviennent qu'en utilisant notre site, ils consentent à :"
                    />

                    <ol>
                        <Li>
                            les conditions énoncées dans la présente politique de confidentialité et
                        </Li>
                        <Li>
                            la collecte, l'utilisation et la conservation des données énumérées dans la présente politique.
                        </Li>
                    </ol>

                </Paragraph>

                <Paragraph>
                    <H3
                        content="Données personnelles que nous collectons" />
                    <div>
                        <div>
                            <SubTitle>Données collectées automatiquement</SubTitle>

                            <Text
                                content="Nous ne collectons aucune donnée automatiquement sur notre site."
                            />

                        </div>
                        <div>
                            <SubTitle>Données recueillies de façon non automatique</SubTitle>

                            <Text
                                content="Nous pouvons également collecter les données suivantes lorsque vous effectuez certaines fonctions sur notre site :"
                            />

                            <ol>
                                <Li>
                                    Email
                                </Li>
                            </ol>

                            <Text
                                content="Ces données peuvent être recueillies au moyen des méthodes suivantes :"
                            />

                            <ol>
                                <Li>
                                    enregistrement d'un compte
                                </Li>
                            </ol>
                        </div>

                        <Text
                            content="Veuillez noter que nous ne collectons que les données qui nous aident à atteindre l'objectif énoncé dans cette politique de confidentialité. Nous ne recueillerons pas de données supplémentaires sans vous en informer au préalable."
                        />

                    </div>
                </Paragraph>

                <Paragraph>
                    <H3
                        content="Comment nous utilisons les données personnelles" />

                    <Text
                        content="Les données personnelles recueillies sur notre site seront utilisées uniquement aux fins précisées dans la présente politique ou indiquées sur les pages pertinentes de notre site. Nous n'utiliserons pas vos données au-delà de ce que nous divulguerons."
                    />

                </Paragraph>

                <Paragraph>
                    <SubTitle>Avec qui nous partageons les données personnelles</SubTitle>
                    <div>
                        <ParagraphTitle>Employés</ParagraphTitle>

                        <Text
                            content="Nous pouvons divulguer à tout membre de notre organisation les données utilisateur dont il a raisonnablement besoin pour réaliser les objectifs énoncés dans la présente politique."
                        />

                    </div>

                    <div>
                        <ParagraphTitle>Autres divulgations</ParagraphTitle>

                        <Text
                            content="Nous nous engageons à ne pas vendre ou partager vos données avec des tiers, sauf dans les cas suivants :"
                        />

                        <ol>
                            <Li>
                                si la loi l'exige
                            </Li>
                            <Li>
                                si elle est requise pour toute procédure judiciaire
                            </Li>
                            <Li>
                                pour prouver ou protéger nos droits légaux
                            </Li>
                            <Li>
                                à des acheteurs ou des acheteurs potentiels de cette société dans le cas où nous cherchons à la vendre la société
                            </Li>
                        </ol>

                        <Text
                            content="Si vous suivez des hyperliens de notre site vers un autre site, veuillez noter que nous ne sommes pas responsables et n'avons pas de contrôle sur leurs politiques et pratiques de confidentialité."
                        />
                    </div>
                </Paragraph>

                <Paragraph>
                    <H3
                        content="Combien de temps nous stockons les données personnelles" />

                    <Text
                        content="Nous ne conservons pas les données des utilisateurs au-delà de ce qui est nécessaire pour atteindre les fins pour lesquelles elles sont recueillies."
                    />

                </Paragraph>

                <Paragraph>
                    <H3
                        content="Comment nous protégeons vos données personnelles" />

                    <Text
                        content="Toutes les données stockées dans notre système sont bien sécurisées et ne sont accessibles qu'à nos développeurs.
                    Alors que nous prenons toutes les précautions raisonnables pour nous assurer que nos données d'utilisateur sont sécurisées et que les utilisateurs sont protégés, il reste toujours du risque de préjudice. L'Internet en sa totalité peut être, parfois, peu sûr et donc nous sommes incapables de garantir la sécurité des données des utilisateurs au-delà de ce qui est raisonnablement pratique."
                    />
                </Paragraph>

                <Paragraph>
                    <H3
                        content="Mineurs" />

                    <Text
                        content="Le RGPD précise que les personnes de moins de 15 ans sont considérées comme des mineurs aux fins de la collecte de données. Les mineurs doivent avoir le consentement d'un représentant légal pour que leurs données soient recueillies, traitées et utilisées."
                    />
                </Paragraph>

                <Paragraph>
                    <H3
                        content="Vos droits en tant qu'utilisateur" />
                    <div>

                        <Text
                            content="En vertu du RGPD, les utilisateurs ont les droits suivants en tant que personnes concernées :"
                        />

                        <ol>
                            <Li>
                                droit d'accès
                            </Li>
                            <Li>
                                droit de rectification
                            </Li>
                            <Li>
                                droit à l'effacement
                            </Li>
                            <Li>
                                droit de restreindre le traitement
                            </Li>
                            <Li>
                                droit à la portabilité des données
                            </Li>
                            <Li>
                                droit d'objection
                            </Li>
                        </ol>

                        <Text
                            content="Vous trouverez de plus amples informations sur ces droits au chapitre 3 (art 12-23) du RGPD."
                        />

                    </div>
                </Paragraph>

                <Paragraph>
                    <H3
                        content="Politique sur les cookies" />

                    <Text
                        content="Un cookie est un petit fichier, stocké sur le disque dur d'un utilisateur par le site Web. Son but est de recueillir des données relatives aux habitudes de navigation de l'utilisateur."
                    />

                    <Text
                        content="Nous utilisons les types de cookies suivants sur notre site pour mémoriser toutes les sélections que vous faites sur notre site afin qu'elles soient sauvegardées pour vos prochaines visites."
                    />

                    <Text
                        content="Vous pouvez choisir d'être averti chaque fois qu'un cookie est transmis. Vous pouvez également choisir de désactiver les cookies entièrement dans votre navigateur Internet, mais cela peut diminuer la qualité de votre expérience d'utilisation."
                    />
                </Paragraph>

                <Paragraph>
                    <H3
                        content="Modifications" />

                    <Text
                        content="Cette politique de confidentialité peut être modifiée à l'occasion afin de maintenir la conformité avec la loi et de tenir compte de tout changement à notre processus de collecte de données. Nous recommandons à nos utilisateurs de vérifier notre politique de temps à autre pour s'assurer qu'ils soient informés de toute mise à jour. Au besoin, nous pouvons informer les utilisateurs par courriel des changements apportés à cette politique."
                    />

                </Paragraph>

                <Paragraph>

                    <Text
                        content="Date d'entrée en vigueur : le 4 octobre 2022"
                    />
                </Paragraph>

            </Body>
        </div>
    )
}

export default Politics;