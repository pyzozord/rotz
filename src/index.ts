interface Card {
  picture: string
  title: string
  stats: string
  description: string[]
  tags: string[]
}

interface CreatureCard extends Card {
  kind: 'creature'
  defense: number
  attack: number
}

interface ObjectCard extends Card {
  kind: 'object'
}

interface BackCard extends Pick<Card, 'picture'> {
  kind: 'back'
}

type AnyCard = CreatureCard | ObjectCard | BackCard

const cards: AnyCard[] = [
  {
    picture: 'https://sinisterdesign.net/blog/wp-content/uploads/2015/11/Card-Back.png',
    title: 'standard back 1',
    kind: 'back'
  },
  {
    picture:
      'https://sportshub.cbsistatic.com/i/2021/03/18/2a6064ae-ad0a-4d8b-bd6a-dc3a716473fc/the-walking-dead-season-10-zombie-walker-1243914.jpg',
    title: 'Limping Forest Snapper * Create: corpse',
    stats: '☠ / ❤❤❤',
    description: [
      `<ul>
          <li>each turn ➔ Limping Forest Snapper attacks</li>
       </ul>`,
    ],
    kind: 'creature',
    tags: ['corpse'],
    defense: 3,
    attack: 1,
  },
  {
    picture:
      'https://tile.loc.gov/image-services/iiif/service:afc:afc1991021:afc1991021_44773/full/pct:12.5/0/default.jpg',
    title: 'Amature Barb Wire Fence * Construction: fence',
    stats: '❤❤❤',
    description: [
      `<ul>
          <li>remove one ❤ from Amature Barb Wire Fence ➔ ignore one ☠ from a </li>
       </ul>`,
    ],
    kind: 'object',
    tags: ['construction', 'fence'],
  },
  {
    picture:
      'https://www.galcogunleather.com/uimages/2021_image_project/owb/Leather_holster_OWB_Fletch_2_black_b.jpg',
    title: `IronGrip's Holster Basic`,
    stats: '',
    description: [
      `one <b>small firearm</b> in your hand doesn't count to hand limit`,
    ],
    kind: 'object',
    tags: ['wearable', 'container'],
  },
  {
    picture:
      'https://i0.wp.com/blog.cheaperthandirt.com/wp-content/uploads/2010/03/AdobeStock_275089783-scaled.jpeg?fit=2560%2C1707&ssl=1',
    title: `Gock's G19 * Weapon: small firearm`,
    stats: '',
    description: [
      `<ul>
        <li> 1 bullet ➔ attack target creature for one ☠</li>
      </ul>`,
    ],
    kind: 'object',
    tags: ['small', 'firearm'],
  },
]


function addCard(card: AnyCard, section: string) {
  console.log(card, section)

  const cardsNode = document.querySelector(`.board .boardsection.${section} .cards`)!
  const templateNode = document.querySelector('template')!

  const cardNode = <HTMLElement>(<HTMLElement>templateNode.content.cloneNode(true)).children[0]
  if (card.picture) {
    cardNode.style.backgroundImage = `url(${card.picture})`
  }

  const titleNode = cardNode.querySelector('.title')!
  if (titleNode && card.title) {
    titleNode.innerHTML = card.title
  }

  const statsNode = cardNode.querySelector('.stats')!
  if (statsNode && card.stats) {
    statsNode.innerHTML = card.stats
  }

  const descriptionNode = cardNode.querySelector('.description')!
  if (descriptionNode && card.description) {
    for (const description of card.description) {
      descriptionNode.innerHTML += description
    }
  }

  cardsNode.appendChild(cardNode)
}

const back = cards[0]
const snapper = cards[1]
const fence = cards[2]
const holster = cards[3]
const glock = cards[4]

addCard(back, 'area')
addCard(snapper, 'vicinity')
addCard(snapper, 'vicinity')
addCard(snapper, 'vicinity')
addCard(snapper, 'vicinity')
addCard(fence, 'camp')
addCard(holster, 'hand')
addCard(glock, 'hand')
