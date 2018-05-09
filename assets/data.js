// data for prayers in json format
const DATA = {
    "prayers" : {
      "actOfContrition" : "O my God, I am heartily sorry for having offended You, and I detest all my sins, because I dread the loss of heaven, and the pains of hell; but most of all because they offend You, my God, Who are all good and deserving of all my love. I firmly resolve, with the help of Your grace, to confess my sins, to do penance, and to amend my life. Amen.",
      "dailyOffering" : "O my Jesus, through the Immaculate Heart of Mary,  I offer You all my prayers, works,  joys and sufferings of this day, in union with the Holy Sacrifice of the Mass throughout the world, in thanksgiving for Your goodness to me, in reparation for my sins,  for the intentions of my family and friends,  and those who have asked me to pray for them and for our Holy Father, the Pope. Amen.",
      "doxology" : "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.",
      "freedomPrayer" : "Lord Jesus Christ, Son of God, have mercy on me a sinner. You promised Lord that You would set the captives free. I confess Jesus that I am a slave and only You can break the chains that bind me. I repent of relying on my own strength. Without You Jesus I can do nothing. I ask You Lord Jesus to set me free from (name area in your life where you need freedom). Come now Holy Spirit and clothe me with power from on high. (take a moment and allow the Holy Spirit to empower you) Give me the grace Lord Jesus to walk in faith today, confident in Your love and mercy. Amen.",
      "guardianAngel" : "Angel of God, my guardian dear,  To whom God’s love commits me here,  Ever this day,  be at my side, To light and guard,  To rule and guide. Amen.",
      "hailMary" : "Hail Mary, Full of Grace, The Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners now, and at the hour of our death. Amen.",
      "ourFather" : "Our Father, Who art in heaven,  Hallowed be Thy Name. Thy Kingdom come.  Thy Will be done, on earth as it is in Heaven.  Give us this day our daily bread. And forgive us our trespasses, as we forgive those who trespass against us.  And lead us not into temptation,  but deliver us from evil. Amen. ",
      "stMichael" : "St. Michael the Archangel,  defend us in battle. Be our defense against the wickedness  and snares of the Devil.  May God rebuke him, we humbly pray,  and do thou, O Prince of the heavenly hosts, by the power of God, thrust into hell Satan,  and all the evil spirits, who prowl about the world  seeking the ruin of souls. Amen."
    },
    "prompts" : {
      "p0" : "In the Name of the Father, and of the Son, And of the Holy Spirit.",
      "p1" : "Holy Spirit teach me how to pray.",
      "p2" : "Think of three things for which to ask the Lord  for forgiveness.",
      "p3" : "Take a moment to thank the Lord for three things.",
      "p4" : "Take a moment and ask the Lord for three things.",
    },
    "prefix": {
        "t0": "We Can Know God",
        "t1": "God's Care",
        "t2": "God's Forgiveness",
        "t3": "Jesus Christ",
        "t4": "Eternal Life",
        "t5": "Holy Spirit",
        "t6": "Discipleship",
        "t7": "Our Lady"
    },

    "scripture" : {
      "day1" : {
        "reference" : "Jeremiah 29:13",
        "verse" : "You will seek me and find me; when you seek me with all your heart."
      },
      "day10" : {
        "reference" : "Luke 2:10",
        "verse" : "Be not afraid."
      },
      "day11" : {
        "reference" : "Ezekiel 36:26",
        "verse" : "A new heart I will give you, and a new spirit I will put within you; and I will take out of your flesh the heart of stone and give you a heart of flesh."
      },
      "day12" : {
        "reference" : "Isaiah 1:18",
        "verse" : "Come now, let us reason together, says the LORD: though your sins are like scarlet, they shall be as white as snow; though they are red like crimson, they shall become like wool."
      },
      "day13" : {
        "reference" : "John 8:11",
        "verse" : " Neither do I condemn you; go, and do not sin again."
      },
      "day14" : {
        "reference" : "Romans 8:1",
        "verse" : "There is therefore now no condemnation for those who are in Christ Jesus."
      },
      "day15" : {
        "reference" : "Luke 15:7",
        "verse" : "There will be more joy in heaven over one sinner who repents than over ninety-nine righteous persons who need no repentance."
      },
      "day16" : {
        "reference" : "John 14:6",
        "verse" : "Jesus said to him, “I am the way, and the truth, and the life; no one comes to the Father, but by me.”"
      },
      "day17" : {
        "reference" : "John 3:16",
        "verse" : " For God so loved the world that he gave his only Son, that whoever believes in him should not perish but have eternal life."
      },
      "day18" : {
        "reference" : "John 6:35",
        "verse" : "Jesus said to them, “I am the bread of life; he who comes to me shall not hunger, and he who believes in me shall never thirst.”"
      },
      "day19" : {
        "reference" : "John 8:12",
        "verse" : "Jesus spoke to them, saying, “I am the light of the world; he who follows me will not walk in darkness, but will have the light of life.”"
      },
      "day2" : {
        "reference" : "Matthew 7:7",
        "verse" : "Ask, and it will be given you; seek, and you will find; knock, and it will be opened to you."
      },
      "day20" : {
        "reference" : "1 John 4:15",
        "verse" : " Whoever confesses that Jesus is the Son of God, God abides in him, and he in God."
      },
      "day21" : {
        "reference" : "Mark 8:36",
        "verse" : "For what does it profit a man, to gain the whole world and forfeit his life?"
      },
      "day22" : {
        "reference" : "Matthew 7:13-14",
        "verse" : "Enter by the narrow gate; for the gate is wide and the way is easy, that leads to destruction, and those who enter by it are many. For the gate is narrow and the way is hard, that leads to life, and those who find it are few."
      },
      "day23" : {
        "reference" : "John 14:1-3",
        "verse" : "Let not your hearts be troubled; believe in God, believe also in me. In my Father’s house are many rooms; if it were not so, would I have told you that I go to prepare a place for you? And when I go and prepare a place for you, I will come again and will take you to myself, that where I am you may be also."
      },
      "day24" : {
        "reference" : "Luke 10:20",
        "verse" : "Rejoice that your names are written in heaven."
      },
      "day25" : {
        "reference" : "Matthew 6:19-21",
        "verse" : " Do not lay up for yourselves treasures on earth, where moth and rust consume and where thieves break in and steal, but lay up for yourselves treasures in heaven, where neither moth nor rust consumes and where thieves do not break in and steal. For where your treasure is, there will your heart be also."
      },
      "day26" : {
        "reference" : "John 14:26",
        "verse" : " But the Counselor, the Holy Spirit, whom the Father will send in my name, he will teach you all things, and bring to your remembrance all that I have said to you."
      },
      "day27" : {
        "reference" : "Acts 1:8",
        "verse" : "But you shall receive power when the Holy Spirit has come upon you; and you shall be my witnesses in Jerusalem and in all Judea and Samaria and to the end of the earth."
      },
      "day28" : {
        "reference" : "Luke 12:49",
        "verse" : "I came to cast fire upon the earth; and would that it were already kindled!"
      },
      "day29" : {
        "reference" : "Luke 3:16a,c.",
        "verse" : " John answered them all, “I baptize you with water; but he who is mightier than I is coming; he will baptize you with the Holy Spirit and with fire.”"
      },
      "day3" : {
        "reference" : "John 1:12",
        "verse" : "But to all who received him, who believed in his name, he gave power to become children of God."
      },
      "day30" : {
        "reference" : "John 4:14",
        "verse" : "But whoever drinks of the water that I shall give him will never thirst; the water that I shall give him will become in him a spring of water welling up to  eternal life."
      },
      "day31" : {
        "reference" : "Matthew 7:24-25",
        "verse" : "Every one then who hears these words of mine and does them will be like a wise man who built his house upon the rock; and the rain fell, and the floods came, and the winds blew and beat upon that house, but it did not fall, because it had been founded on the rock."
      },
      "day32" : {
        "reference" : "Matthew 25: 35-40",
        "verse" : " For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me, I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me. Then the righteous will answer him, ‘Lord, when did we see thee hungry and feed thee, or thirsty and give thee drink? And when did we see thee a stranger and welcome thee, or naked and clothe thee? And when did we see thee sick or in prison and visit thee?’ And the King will answer them, ‘Truly, I say to you, as you did it to one of the least of these my brethren, you did it to me.’"
      },
      "day33" : {
        "reference" : "Luke 10:27",
        "verse" : "You shall love the Lord your God with all your heart, and with all your soul, and with all your strength, and with all your mind; and your neighbor as yourself."
      },
      "day34" : {
        "reference" : "John 13:34",
        "verse" : " A new commandment I give to you, that you love one another; even as I have loved you, that you also love one another."
      },
      "day35" : {
        "reference" : "Matthew 19:21 ",
        "verse" : " Jesus said to him, “If you would be perfect, go, sell what you possess and give to the poor, and you will have treasure in heaven; and come, follow me.”"
      },
      "day36" : {
        "reference" : "Luke 1:38",
        "verse" : "And Mary said, “Behold, I am the handmaid of the Lord; let it be to me according to your word.”"
      },
      "day37" : {
        "reference" : "Luke 1:46-47",
        "verse" : "And Mary said, “My soul magnifies the Lord, and my spirit rejoices in God my Savior.”"
      },
      "day38" : {
        "reference" : "Luke 2:19",
        "verse" : " But Mary kept all these things, pondering them in her heart."
      },
      "day39" : {
        "reference" : "John 2:5",
        "verse" : "His mother said to the servants, “Do whatever he  tells you.”"
      },
      "day4" : {
        "reference" : "1 John 3:1",
        "verse" : "See what love the Father has given us, that we should be called children of God; and so we are."
      },
      "day40" : {
        "reference" : "John 19:26-27",
        "verse" : "When Jesus saw his mother, and the disciple whom he loved standing near, he said to his mother, “Woman, behold, your son!” Then he said to the disciple, “Behold, your mother!” And from that hour the disciple took her to his own home."
      },
      "day5" : {
        "reference" : "James 4:8",
        "verse" : "Draw near to God and he will draw near to you."
      },
      "day6" : {
        "reference" : "Matthew 11:28-30",
        "verse" : "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me; for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light."
      },
      "day7" : {
        "reference" : "John 10:10",
        "verse" : "The thief comes only to steal and kill and destroy; I came that they may have life, and have it abundantly."
      },
      "day8" : {
        "reference" : "Matthew 6:25-26",
        "verse" : "Therefore I tell you, do not be anxious about your life, what you shall eat or what you shall drink, nor about your body, what you shall put on. Is not life more than food, and the body more than clothing? Look at the birds of the air: they neither sow nor reap nor gather into barns, and yet your heavenly Father feeds them. Are you not of more value than they?"
      },
      "day9" : {
        "reference" : "Matthew 28:20",
        "verse" : "I am with you always, to the close of the age."
      }
    }
  }