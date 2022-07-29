const bookSelection = {
    isGenreSuitable(genre, age) {
      if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
        return `Books with ${genre} genre are not suitable for kids at ${age} age`;
      } else {
        return `Those books are suitable`;
      }
    },
    isItAffordable(price, budget) {
      if (typeof price !== "number" || typeof budget !== "number") {
        throw new Error("Invalid input");
      }
  
      let result = budget - price;
  
      if (result < 0) {
        return "You don't have enough money";
      } else {
        return `Book bought. You have ${result}$ left`;
      }
    },
    suitableTitles(array, wantedGenre) {
      let resultArr = [];
  
      if (!Array.isArray(array) || typeof wantedGenre !== "string") {
        throw new Error("Invalid input");
      }
      array.map((obj) => {
        if (obj.genre === wantedGenre) {
          resultArr.push(obj.title);
        }
      });
      return resultArr;
    },
  };
  

const {expect} = require('chai')



describe('Test', () =>{
    describe('isGenreSuitable',() => {
        it('happy', () => {
            expect(bookSelection.isGenreSuitable('Thriller',20)).to.equal('Those books are suitable')
            expect(bookSelection.isGenreSuitable('Horror',20)).to.equal('Those books are suitable')
            expect(bookSelection.isGenreSuitable('a',20)).to.equal('Those books are suitable')
            expect(bookSelection.isGenreSuitable('a',10)).to.equal('Those books are suitable')
            
           
        })
        it('inapropriete genre for the age',() => {
            expect(bookSelection.isGenreSuitable('Thriller',10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`)
            expect(bookSelection.isGenreSuitable('Horror',10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`)
            
        })

        it('inapropriete genre for the age',() => {
            expect(bookSelection.isGenreSuitable('Thriller',12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`)
            expect(bookSelection.isGenreSuitable('Horror',12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`)
        })
    })

    describe('isItAffordable',() => {
        it('happy path',() => {
            expect(bookSelection.isItAffordable(1, 2)).to.equal('Book bought. You have 1$ left')
        })

        it('happy path edge case ',() => {
            expect(bookSelection.isItAffordable(1, 1)).to.equal('Book bought. You have 0$ left')
        })

        it(`not enough money`,() => {
            expect(bookSelection.isItAffordable(2,1)).to.equal(`You don't have enough money`)
    })
        it(`invalid input`, () => {
            expect(() => bookSelection.isItAffordable('1',1)).to.throw()
            expect(() => bookSelection.isItAffordable(1,'1')).to.throw()
            expect(() => bookSelection.isItAffordable('1','1')).to.throw()
        })

    })
       
    

    describe('suitableTitles',() => {
        it('works',() => {
            expect(bookSelection.suitableTitles([{
                title : 'aa',
                genre: 'a'
            }],'a')).to.deep.equal(['aa'])
        })

        it('works 2',() => {
            expect(bookSelection.suitableTitles([{
                title : 'aa',
                genre: 'a'
            },
        {
            title : 'ab',
            genre: 'a'

        }],'a')).to.deep.equal(['aa','ab'])
        })
        it('no match',() => {
            expect(bookSelection.suitableTitles([{
                title : 'aa',
                genre: 'a'
            }],'a')).to.deep.equal([])
        })
    })
})