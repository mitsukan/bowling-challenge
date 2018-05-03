describe("Bowling", function() {

    var bowling;

    beforeEach(function() {
        bowling = new Bowling();
    });


    describe("round object", function() {
        it("Has an array to store the round", function () {
            expect(bowling.round).toEqual([]);
        });
    });

});