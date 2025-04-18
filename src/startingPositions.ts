export class StartingPosition {
  eco: string;
  name: string;
  fen: string;
  wikiPath: string;
  moves: string[];

  constructor(eco: string, name: string, fen: string, wikiPath: string, moves: string[]) {
    this.eco = eco;
    this.name = name;
    this.fen = fen;
    this.wikiPath = wikiPath;
    this.moves = moves;
  }
}

export class Category {
  id: string;
  items: StartingPosition[];

  constructor(id: string, items: StartingPosition[]) {
    this.id = id;
    this.items = items;
  }
}

const categories = [
  new Category("e4", [
    new StartingPosition(
      "B00",
      "King's Pawn",
      "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
      "King's_Pawn_Game",
      ["e4"]
    ),
    new StartingPosition(
      "B00",
      "Open Game",
      "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
      "Open_Game",
      ["e4 e5"]
    ),
    new StartingPosition(
      "B02",
      "Alekhine's Defence",
      "rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2",
      "Alekhine's_Defence",
      ["e4 Nf6"]
    ),
    new StartingPosition(
      "B04",
      "Alekhine's Defence: Modern Variation",
      "rnbqkb1r/ppp1pppp/3p4/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq - 1 4",
      "Alekhine's_Defence#Modern_Variation:_3.d4_d6_4.Nf3",
      ["e4 Nf6", "e5 Nd5", "d4 d6", "Nf3"]
    ),
    new StartingPosition(
      "C23",
      "Bishop's Opening",
      "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq - 1 2",
      "Bishop%27s_Opening",
      ["e4 e5", "Bc4"]
    ),
    new StartingPosition(
      "B10",
      "Caro-Kann Defence",
      "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
      "Caro–Kann_Defence",
      ["e4 c6"]
    ),
    new StartingPosition(
      "B12",
      "Caro-Kann Defence: Advance Variation",
      "rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
      "Caro–Kann_Defence#Advance_Variation:_3.e5",
      ["e4 c6", "d4 d5", "e5"]
    ),
    new StartingPosition(
      "B18",
      "Caro-Kann Defence: Classical Variation",
      "rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
      "Caro–Kann_Defence#Classical_Variation:_4...Bf5",
      ["e4 c6", "d4 d5", "Nc3 dxe4", "Nxe4 Bf5"]
    ),
    new StartingPosition(
      "B13",
      "Caro-Kann Defence: Exchange Variation",
      "rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
      "Caro%E2%80%93Kann_Defence#Exchange_Variation:_3.exd5_cxd5",
      ["e4 c6", "d4 d5", "exd5"]
    ),
    new StartingPosition(
      "B14",
      "Caro-Kann Defence: Panov-Botvinnik Attack",
      "rnbqkb1r/pp2pppp/5n2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR b KQkq - 2 5",
      "Caro–Kann_Defence#Panov.E2.80.93Botvinnik_Attack:_4.c4",
      ["e4 c6", "d4 d5", "exd5 cxd5", "c4 Nf6", "Nc3"]
    ),
    new StartingPosition(
      "B17",
      "Caro-Kann Defence: Steinitz Variation",
      "r1bqkbnr/pp1npppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
      "Caro–Kann_Defence#Modern_Variation:_4...Nd7",
      ["e4 c6", "d4 d5", "Nc3 dxe4", "Nxe4 Nd7"]
    ),
    new StartingPosition(
      "C21",
      "Danish Gambit",
      "rnbqkbnr/pppp1ppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3",
      "Danish_Gambit",
      ["e4 e5", "d4 exd4", "c3"]
    ),
    new StartingPosition(
      "C46",
      "Four Knights Game",
      "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 4",
      "Four_Knights_Game",
      ["e4 e5", "Nf3 Nc6", "Nc3 Nf6"]
    ),
    new StartingPosition(
      "C47",
      "Four Knights Game: Scotch Variation",
      "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 0 4",
      "Four_Knights_Game#4.d4",
      ["e4 e5", "Nf3 Nc6", "Nc3 Nf6", "d4"]
    ),
    new StartingPosition(
      "C48",
      "Four Knights Game: Spanish Variation",
      "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 5 4",
      "Four_Knights_Game#4.Bb5",
      ["e4 e5", "Nf3 Nf6", "Nc3 Nc6", "Bb5"]
    ),
    new StartingPosition(
      "C00",
      "French Defence",
      "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
      "French_Defence",
      ["e4 e6"]
    ),
    new StartingPosition(
      "C02",
      "French Defence: Advance Variation",
      "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
      "French_Defence#Advance_Variation:_3.e5",
      ["e4 e6", "d4 d5", "e5"]
    ),
    new StartingPosition(
      "C11",
      "French Defence: Burn Variation",
      "rnbqkb1r/ppp2ppp/4pn2/3p2B1/3PP3/2N5/PPP2PPP/R2QKBNR b KQkq - 0 5",
      "French_Defence#3.Nc3",
      ["e4 e6", "d4 d5", "Nc3 Nf6", "Bg5 dxe4"]
    ),
    new StartingPosition(
      "C11",
      "French Defence: Classical Variation",
      "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4",
      "French_Defence#Classical_Variation:_3...Nf6",
      ["e4 e6", "d4 d5", "Nc3 Nf6"]
    ),
    new StartingPosition(
      "C01",
      "French Defence: Exchange Variation",
      "rnbqkbnr/ppp2ppp/4p3/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
      "French_Defence#Exchange_Variation:_3.exd5_exd5",
      ["e4 e6", "d4 d5", "exd5"]
    ),
    new StartingPosition(
      "C10",
      "French Defence: Rubinstein Variation",
      "rnbqkbnr/ppp2ppp/4p3/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
      "French_Defence#Rubinstein_Variation:_3...dxe4",
      ["e4 e6", "d4 d5", "Nc3 dxe4"]
    ),
    new StartingPosition(
      "C03",
      "French Defence: Tarrasch Variation",
      "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq - 1 3",
      "French_Defence#Tarrasch_Variation:_3.Nd2",
      ["e4 e6", "d4 d5", "Nd2"]
    ),
    new StartingPosition(
      "C15",
      "French Defence: Winawer Variation",
      "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4",
      "French_Defence#Winawer_Variation:_3...Bb4",
      ["e4 e6", "d4 d5", "Nc3 Bb4"]
    ),
    new StartingPosition(
      "C50",
      "Giuoco Piano",
      "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
      "Giuoco_Piano",
      ["e4 e5", "Nf3 Nc6", "Bc4 Bc5"]
    ),
    new StartingPosition(
      "C50",
      "Italian Game",
      "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
      "Italian_Game",
      ["e4 e5", "Nf3 Nc6", "Bc4"]
    ),
    new StartingPosition(
      "C51",
      "Evans Gambit",
      "r1bqk1nr/pppp1ppp/2n5/2b1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R b KQkq - 0 4",
      "Evans_Gambit",
      ["e4 e5", "Nf3 Nc6", "Bc4 Bc5", "b4"]
    ),
    new StartingPosition(
      "C50",
      "Italian Game: Hungarian Defence",
      "r1bqk1nr/ppppbppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
      "Hungarian_Defense",
      ["e4 e5", "Nf3 Nc6", "Bc4 Be7"]
    ),
    new StartingPosition(
      "C55",
      "Italian Game: Two Knights Defence",
      "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
      "Two_Knights_Defense",
      ["e4 e5", "Nf3 Nc6", "Bc4 Nf6"]
    ),
    new StartingPosition(
      "C30",
      "King's Gambit",
      "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
      "King's_Gambit",
      ["e4 e5", "f4"]
    ),
    new StartingPosition(
      "C33",
      "King's Gambit Accepted",
      "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
      "King's_Gambit#King.27s_Gambit_Accepted:_2...exf4",
      ["e4 e5", "f4 exf4"]
    ),
    new StartingPosition(
      "C33",
      "King's Gambit Accepted: Bishop's Gambit",
      "rnbqkbnr/pppp1ppp/8/8/2B1Pp2/8/PPPP2PP/RNBQK1NR b KQkq - 1 3",
      "King's_Gambit#King.27s_Gambit_Accepted:_2...exf4",
      ["e4 e5", "f4 exf4", "Bc4"]
    ),
    new StartingPosition(
      "C36",
      "King's Gambit Accepted: Modern Defence",
      "rnbqkbnr/ppp2ppp/8/3p4/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq d6 0 4",
      "King's_Gambit#Modern_Defence:_3...d5",
      ["e4 e5", "f4 exf4", "Nf3 d5"]
    ),
    new StartingPosition(
      "C30",
      "King's Gambit Accepted: Classical Variation",
      "rnbqkbnr/pppp1p1p/8/6p1/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
      "King's_Gambit#Classical_Variation:_3...g5",
      ["e4 e5", "f4 exf4", "Nf3 g5"]
    ),
    new StartingPosition(
      "C30",
      "King's Gambit Declined: Classical Variation",
      "rnbqk1nr/pppp1ppp/8/2b1p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 1 3",
      "King's_Gambit#Classical_Defence:_2...Bc5",
      ["e4 e5", "f4 Bc5"]
    ),
    new StartingPosition(
      "C31",
      "King's Gambit: Falkbeer Countergambit",
      "rnbqkbnr/ppp2ppp/8/3pp3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
      "King%27s_Gambit,_Falkbeer_Countergambit",
      ["e4 e5", "f4 d5"]
    ),
    new StartingPosition(
      "B06",
      "Modern Defence",
      "rnbqkbnr/pppppp1p/6p1/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
      "Modern_Defense",
      ["e4 g6"]
    ),
    new StartingPosition(
      "B06",
      "Modern Defence: Robatsch Defence",
      "rnbqk1nr/ppppppbp/6p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 2 3",
      "Modern_Defense",
      ["e4 g6", "d4 Bg7", "Nc3"]
    ),
    new StartingPosition(
      "C41",
      "Philidor Defence",
      "rnbqkbnr/ppp2ppp/3p4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
      "Philidor_Defence",
      ["e4 e5", "Nf3 d6"]
    ),
    new StartingPosition(
      "C41",
      "Philidor Defence: Lion Variation",
      "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 2 5",
      "Philidor_Defence",
      ["e4 d6", "d4 Nf6", "Nc3 e5", "Nf3 Nbd7"]
    ),
    new StartingPosition(
      "B07",
      "Lion Variation: Anti-Philidor",
      "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PPP2/2N5/PPP3PP/R1BQKBNR w KQkq - 0 5",
      "Philidor_Defence",
      ["e4 d6", "d4 Nf6", "Nc3 Nbd7", "f4 e5"]
    ),
    new StartingPosition(
      "B07",
      "Pirc Defence",
      "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 2 3",
      "Pirc_Defence",
      ["e4 d6", "d4 Nf6", "Nc3"]
    ),
    new StartingPosition(
      "B09",
      "Pirc Defence: Austrian Attack",
      "rnbqkb1r/ppp1pp1p/3p1np1/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq - 0 4",
      "Pirc_Defence#Austrian_Attack:_4.f4",
      ["e4 d6", "d4 Nf6", "Nc3 g6", "f4"]
    ),
    new StartingPosition(
      "B07",
      "Pirc Defence: Classical Variation",
      "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 1 4",
      "Pirc_Defence#Classical_.28Two_Knights.29_System:_4.Nf3",
      ["e4 d6", "d4 Nf6", "Nc3 g6", "Nf3"]
    ),
    new StartingPosition(
      "B07",
      "Pirc Defence: Lion Variation",
      "r1bqkb1r/pppnpppp/3p1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 3 4",
      "Pirc_Defence#Classical_.28Two_Knights.29_System",
      ["e4 d6", "d4 Nf6", "Nc3 Nbd7"]
    ),
    new StartingPosition(
      "C42",
      "Petrov's Defence",
      "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
      "Petrov's_Defence",
      ["e4 e5", "Nf3 Nf6"]
    ),
    new StartingPosition(
      "C42",
      "Petrov's Defence: Classical Attack",
      "rnbqkb1r/ppp2ppp/3p4/8/3Pn3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 5",
      "Petrov's_Defence#3.Nxe5",
      ["e4 e5", "Nf3 Nf6", "Nxe5 d6", "Nf3 Nxe4", "d4"]
    ),
    new StartingPosition(
      "C43",
      "Petrov's Defence: Steinitz Attack",
      "rnbqkb1r/pppp1ppp/5n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
      "Petrov's_Defence#3.d4",
      ["e4 e5", "Nf3 Nf6", "d4"]
    ),
    new StartingPosition(
      "C42",
      "Petrov's Defence: Three Knights Game",
      "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 3 3",
      "Petrov's_Defence#3.Nc3",
      ["e4 e5", "Nf3 Nf6", "Nc3"]
    ),
    new StartingPosition(
      "C60",
      "Ruy Lopez",
      "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
      "Ruy_Lopez",
      ["e4 e5", "Nf3 Nc6", "Bb5"]
    ),
    new StartingPosition(
      "C65",
      "Ruy Lopez: Berlin Defence",
      "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
      "Ruy_Lopez#Berlin_Defence:_3...Nf6",
      ["e4 e5", "Nf3 Nc6", "Bb5 Nf6"]
    ),
    new StartingPosition(
      "C64",
      "Ruy Lopez: Classical Variation",
      "r1bqk1nr/pppp1ppp/2n5/1Bb1p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
      "Ruy_Lopez#Classical_Defence:_3...Bc5",
      ["e4 e5", "Nf3 Nc6", "Bb5 Bc5"]
    ),
    new StartingPosition(
      "C84",
      "Ruy Lopez: Closed Variation",
      "r1bqk2r/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 b kq - 1 7",
      "Ruy_Lopez#Main_line:_4.Ba4_Nf6_5.0-0_Be7_6.Re1_b5_7.Bb3_d6_8.c3_0-0",
      ["e4 e5", "Nf3 Nc6", "Bb5 a6", "Ba4 Nf6", "O-O Be7", "Re1 b5", "Bb3"]
    ),
    new StartingPosition(
      "C68",
      "Ruy Lopez: Exchange Variation",
      "r1bqkbnr/1ppp1ppp/p1B5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4",
      "Ruy_Lopez,_Exchange_Variation",
      ["e4 e5", "Nf3 Nc6", "Bb5 a6", "Bxc6"]
    ),
    new StartingPosition(
      "C89",
      "Ruy Lopez: Marshall Attack",
      "r1bq1rk1/2p1bppp/p1n2n2/1p1pp3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 9",
      "Ruy_Lopez#Marshall_Attack",
      ["e4 e5", "Nf3 Nc6", "Bb5 a6", "Ba4 Nf6", "O-O Be7", "Re1 b5", "Bb3 O-O", "c3 d5"]
    ),
    new StartingPosition(
      "C63",
      "Ruy Lopez: Schliemann Defence",
      "r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
      "Ruy_Lopez#Schliemann_Defence:_3...f5",
      ["e4 e5", "Nf3 Nc6", "Bb5 f5"]
    ),
    new StartingPosition(
      "B01",
      "Scandinavian Defence",
      "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
      "Scandinavian_Defense",
      ["e4 d5"]
    ),
    new StartingPosition(
      "B01",
      "Scandinavian Defence: Modern Variation",
      "rnbqkb1r/ppp1pppp/5n2/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
      "Scandinavian_Defense#2...Nf6",
      ["e4 d5", "exd5 Nf6", "d4"]
    ),
    new StartingPosition(
      "B01",
      "Scandinavian Defence: Icelandic-Palme Gambit",
      "rnbqkb1r/ppp2ppp/4pn2/3P4/2P5/8/PP1P1PPP/RNBQKBNR w KQkq - 0 4",
      "Scandinavian_Defense#2...Nf6",
      ["e4 d5", "exd5 Nf6", "c4 e6"]
    ),
    new StartingPosition(
      "C44",
      "Scotch Game",
      "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
      "Scotch_Game",
      ["e4 e5", "Nf3 Nc6", "d4"]
    ),
    new StartingPosition(
      "C45",
      "Scotch Game: Classical Variation",
      "r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
      "Scotch_Game,_Classical_Variation",
      ["e4 e5", "Nf3 Nc6", "d4 exd4", "Nxd4 Bc5"]
    ),
    new StartingPosition(
      "C45",
      "Scotch Game: Mieses Variation",
      "r1bqkb1r/p1pp1ppp/2p2n2/4P3/8/8/PPP2PPP/RNBQKB1R b KQkq - 0 6",
      "Scotch_Game#Schmidt_Variation:_4...Nf6",
      ["e4 e5", "Nf3 Nc6", "d4 exd4", "Nxd4 Nf6", "Nxc6 bxc6", "e5"]
    ),
    new StartingPosition(
      "C45",
      "Scotch Game: Steinitz Variation",
      "r1b1kbnr/pppp1ppp/2n5/8/3NP2q/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
      "Scotch_Game#Steinitz_Variation:_4...Qh4.21.3F",
      ["e4 e5", "Nf3 Nc6", "d4 exd4", "Nxd4 Qh4"]
    ),
    new StartingPosition(
      "B20",
      "Sicilian Defence",
      "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
      "Sicilian_Defence",
      ["e4 c5"]
    ),
    new StartingPosition(
      "B36",
      "Sicilian Defence: Accelerated Dragon",
      "r1bqkbnr/pp1ppp1p/2n3p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
      "Sicilian_Defence,_Accelerated_Dragon",
      ["e4 c5", "Nf3 Nc6", "d4 cxd4", "Nxd4 g6"]
    ),
    new StartingPosition(
      "B22",
      "Sicilian Defence: Alapin Variation",
      "rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
      "Sicilian_Defence,_Alapin_Variation",
      ["e4 c5", "c3"]
    ),
    new StartingPosition(
      "B23",
      "Sicilian Defence: Closed Variation",
      "rnbqkbnr/pp1ppppp/8/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2",
      "Sicilian_Defence#Closed_Sicilian",
      ["e4 c5", "Nc3"]
    ),
    new StartingPosition(
      "B70",
      "Sicilian Defence: Dragon Variation",
      "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
      "Sicilian_Defence,_Dragon_Variation",
      ["e4 c5", "Nf3 d6", "d4 cxd4", "Nxd4 Nf6", "Nc3 g6"]
    ),
    new StartingPosition(
      "B23",
      "Sicilian Defence: Grand Prix Attack",
      "nbqkbnr/pp1ppppp/8/2p5/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
      "Sicilian_Defence#Grand_Prix_Attack",
      ["e4 c5", "f4"]
    ),
    new StartingPosition(
      "B27",
      "Sicilian Defence: Hyper-Accelerated Dragon",
      "rnbqkbnr/pp1ppp1p/6p1/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
      "Sicilian_Defence#2...g6:_Hungarian_Variation",
      ["e4 c5", "Nf3 g6"]
    ),
    new StartingPosition(
      "B41",
      "Sicilian Defence: Kan Variation",
      "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
      "Sicilian_Defence#Kan_.28Paulsen.29_Variation:_4...a6",
      ["e4 c5", "Nf3 e6", "d4 cxd4", "Nxd4 a6"]
    ),
    new StartingPosition(
      "B90",
      "Sicilian Defence: Najdorf Variation",
      "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
      "Sicilian_Defence,_Najdorf_Variation",
      ["e4 c5", "Nf3 d6", "d4 cxd4", "Nxd4 Nf6", "Nc3 a6"]
    ),
    new StartingPosition(
      "B60",
      "Sicilian Defence: Richter-Rauzer Variation",
      "r1bqkb1r/pp2pppp/2np1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R b KQkq - 4 6",
      "Sicilian_Defence#Classical_Variation:_5...Nc6",
      ["e4 c5", "Nf3 d6", "d4 cxd4", "Nxd4 Nf6", "Nc3 Nc6", "Bg5"]
    ),
    new StartingPosition(
      "B80",
      "Sicilian Defence: Scheveningen Variation",
      "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
      "Sicilian_Defence,_Scheveningen_Variation",
      ["e4 c5", "Nf3 d6", "d4 cxd4", "Nxd4 Nf6", "Nc3 e6"]
    ),
    new StartingPosition(
      "B21",
      "Sicilian Defence: Smith-Morra Gambit",
      "rnbqkbnr/pp1ppppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3",
      "Sicilian_Defence,_Smith–Morra_Gambit",
      ["e4 c5", "d4 cxd4", "c3"]
    ),
    new StartingPosition(
      "C25",
      "Vienna Game",
      "rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2",
      "Vienna_Game",
      ["e4 e5", " Nc3"]
    ),
    new StartingPosition(
      "C27",
      "Vienna Game: Frankenstein-Dracula Variation",
      "rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 0 4",
      "Frankenstein-Dracula_Variation",
      ["e4 e5", "Nc3 Nf6", "Bc4 Nxe4"]
    ),
    new StartingPosition(
      "C46",
      "Four Knights Game: Halloween Gambit",
      "r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/2N5/PPPP1PPP/R1BQKB1R b KQkq - 0 4",
      "Halloween_Gambit",
      ["e4 e5", "Nf3 Nc6", "Nc3 Nf6", "Nxe5"]
    ),
    new StartingPosition(
      "C20",
      "King's Pawn Game: Wayward Queen Attack",
      "rnbqkbnr/pppp1ppp/8/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR b KQkq - 1 2",
      "Danvers_Opening",
      ["e4 e5", "Qh5"]
    ),
    new StartingPosition(
      "C20",
      "Bongcloud Attack",
      "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPKPPP/RNBQ1BNR b kq - 1 2",
      "Bong",
      ["e4 e5", "Ke2"]
    ),
  ]),
  new Category("d4", [
    new StartingPosition(
      "A40",
      "Queen's Pawn",
      "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
      "Queen's_Pawn_Game",
      ["d4"]
    ),
    new StartingPosition(
      "A57",
      "Benko Gambit",
      "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 0 4",
      "Benko_Gambit",
      ["d4 Nf6", "c4 c5", "d5 b5"]
    ),
    new StartingPosition(
      "A61",
      "Benoni Defence: Modern Benoni",
      "rnbqkb1r/pp1p1ppp/4pn2/2pP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 0 4",
      "Modern_Benoni",
      ["d4 Nf6", "c4 c5", "d5 e6"]
    ),
    new StartingPosition(
      "A43",
      "Benoni Defence: Czech Benoni",
      "rnbqkb1r/pp1p1ppp/5n2/2pPp3/2P5/8/PP2PPPP/RNBQKBNR w KQkq e6 0 4",
      "Benoni_Defense#Czech_Benoni:_1.d4_Nf6_2.c4_c5_3.d5_e5",
      ["d4 Nf6", "c4 c5", "d5 e5"]
    ),
    new StartingPosition(
      "D00",
      "Blackmar Gambit",
      "rnbqkbnr/ppp1pppp/8/3p4/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
      "Blackmar–Diemer_Gambit",
      ["d4 d5", "e4"]
    ),
    new StartingPosition(
      "E11",
      "Bogo-Indian Defence",
      "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
      "Bogo-Indian_Defence",
      ["d4 Nf6", "c4 e6", "Nf3 Bb4+"]
    ),
    new StartingPosition(
      "E00",
      "Catalan Opening",
      "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3",
      "Catalan_Opening",
      ["d4 Nf6", "c4 e6", "g3"]
    ),
    new StartingPosition(
      "E06",
      "Catalan Opening: Closed Variation",
      "rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQK2R b KQkq - 3 5",
      "Catalan_Opening",
      ["d4 Nf6", "c4 e6", "g3 d5", "Nf3 Be7", "Bg2"]
    ),
    new StartingPosition(
      "A80",
      "Dutch Defence",
      "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
      "Dutch_Defence",
      ["d4 f5"]
    ),
    new StartingPosition(
      "A96",
      "Dutch Defence: Classical Variation",
      "rnbq1rk1/ppp1b1pp/3ppn2/5p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - - 0 7",
      "Dutch_Defence",
      ["d4 f5", "c4 Nf6", "g3 e6", "Bg2 Be7", "Nf3 O-O", "O-O d6"]
    ),
    new StartingPosition(
      "A87",
      "Dutch Defence: Leningrad Variation",
      "rnbqk2r/ppppp1bp/5np1/5p2/2PP4/5NP1/PP2PPBP/RNBQK2R b KQkq - 3 5",
      "Dutch_Defence",
      ["d4 f5", "c4 Nf6", "g3 g6", "Bg2 Bg7", "Nf3"]
    ),
    new StartingPosition(
      "A83",
      "Dutch Defence: Staunton Gambit",
      "rnbqkb1r/ppppp1pp/5n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR b KQkq - 3 4",
      "Dutch_Defence",
      ["d4 f5", "e4 fxe4", "Nc3 Nf6", "Bg5"]
    ),
    new StartingPosition(
      "A92",
      "Dutch Defence: Stonewall Variation",
      "rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - - 0 7",
      "Dutch_Defence",
      ["d4 f5", "c4 Nf6", "g3 e6", "Bg2 Be7", "Nf3 O-O", "O-O d5"]
    ),
    new StartingPosition(
      "D80",
      "Grünfeld Defence",
      "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
      "Grünfeld_Defence",
      ["d4 Nf6", "c4 g6", "Nc3 d5"]
    ),
    new StartingPosition(
      "D82",
      "Grünfeld Defence: Brinckmann Attack",
      "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP1B2/2N5/PP2PPPP/R2QKBNR b KQkq - 1 4",
      "Grünfeld_Defence#Lines_with_4.Bf4_and_the_Gr.C3.BCnfeld_Gambit",
      ["d4 Nf6", "c4 g6", "Nc3 d5", "Bf4"]
    ),
    new StartingPosition(
      "D85",
      "Grünfeld Defence: Exchange Variation",
      "rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 5",
      "Grünfeld_Defence#Exchange_Variation:_4.cxd5_Nxd5_5.e4",
      ["d4 Nf6", "c4 g6", "Nc3 d5", "cxd5 Nxd5"]
    ),
    new StartingPosition(
      "D80",
      "Grünfeld Defence: Russian Variation",
      "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/1QN5/PP2PPPP/R1B1KBNR b KQkq - 1 4",
      "Grünfeld_Defence#Russian_System:_4.Nf3_Bg7_5.Qb3",
      ["d4 Nf6", "c4 g6", "Nc3 d5", "Qb3"]
    ),
    new StartingPosition(
      "D90",
      "Grünfeld Defence: Taimanov Variation",
      "rnbqk2r/ppp1ppbp/5np1/3p2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq - 3 5",
      "Grünfeld_Defence#Taimanov.27s_Variation_with_4.Nf3_Bg7_5.Bg5",
      ["d4 Nf6", "c4 g6", "Nc3 d5", "Nf3 Bg7", "Bg5"]
    ),
    new StartingPosition(
      "E61",
      "King's Indian Defence",
      "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
      "King's_Indian_Defence",
      ["d4 Nf6", "c4 g6"]
    ),
    new StartingPosition(
      "E77",
      "King's Indian Defence: 4.e4",
      "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq - 0 5",
      "King's_Indian_Defence",
      ["d4 Nf6", "c4 g6", "Nc3 Bg7", "e4 d6"]
    ),
    new StartingPosition(
      "E73",
      "King's Indian Defence: Averbakh Variation",
      "rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR b KQ - 3 6",
      "King's_Indian_Defence#Averbakh_Variation:_5.Be2_0-0_6.Bg5",
      ["d4 Nf6", "c4 g6", "Nc3 Bg7", "e4 d6", "Be2 O-O", "Bg5"]
    ),
    new StartingPosition(
      "E62",
      "King's Indian Defence: Fianchetto Variation",
      "rnbqk2r/ppp1ppbp/3p1np1/8/2PP4/2N2NP1/PP2PP1P/R1BQKB1R b KQkq - 0 5",
      "King's_Indian_Defence#Fianchetto_Variation:_3.Nf3_Bg7_4.g3",
      ["d4 Nf6", "c4 g6", "Nc3 Bg7", "Nf3 d6", "g3"]
    ),
    new StartingPosition(
      "E76",
      "King's Indian Defence: Four Pawns Attack",
      "rnbqk2r/ppp1ppbp/3p1np1/8/2PPPP2/2N5/PP4PP/R1BQKBNR b KQkq - 0 5",
      "King%27s_Indian_Defence,_Four_Pawns_Attack",
      ["d4 Nf6", "c4 g6", "Nc3 Bg7", "e4 d6", "f4"]
    ),
    new StartingPosition(
      "E91",
      "King's Indian Defence: Classical Variation",
      "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R b KQ - 3 6",
      "King's_Indian_Defence#Classical_Variation:_5.Nf3_0-0_6.Be2_e5",
      ["d4 Nf6", "c4 g6", "Nc3 Bg7", "e4 d6", "Nf3 O-O", "Be2"]
    ),
    new StartingPosition(
      "E80",
      "King's Indian Defence: Sämisch Variation",
      "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR b KQkq - 0 5",
      "King's_Indian_Defence#S.C3.A4misch_Variation:_5.f3",
      ["d4 Nf6", "c4 g6", "Nc3 Bg7", "e4 d6", "f3"]
    ),
    new StartingPosition(
      "A41",
      "Queens's Pawn Game: Modern Defence",
      "rnbqk1nr/ppp1ppbp/3p2p1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
      "Queen's_Pawn_Game#1...g6",
      ["d4 g6", "c4 d6", "Nc3 Bg7"]
    ),
    new StartingPosition(
      "E20",
      "Nimzo-Indian Defence",
      "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
      "Nimzo-Indian_Defence",
      ["d4 Nf6", "c4 e6", "Nc3 Bb4"]
    ),
    new StartingPosition(
      "E32",
      "Nimzo-Indian Defence: Classical Variation",
      "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR b KQkq - 3 4",
      "Nimzo-Indian_Defence#Classical_Variation:_4.Qc2",
      ["d4 Nf6", "c4 e6", "Nc3 Bb4", "Qc2"]
    ),
    new StartingPosition(
      "E43",
      "Nimzo-Indian Defence: Fischer Variation",
      "rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq - 0 5",
      "Nimzo-Indian_Defence#4...b6",
      ["d4 Nf6", "c4 e6", "Nc3 Bb4", "e3 b6"]
    ),
    new StartingPosition(
      "E41",
      "Nimzo-Indian Defence: Hübner Variation",
      "r1bqk2r/pp3ppp/2nppn2/2p5/2PP4/2PBPN2/P4PPP/R1BQK2R w KQkq - 0 8",
      "Nimzo-Indian_Defence#4...c5",
      ["d4 Nf6", "c4 e6", "Nc3 Bb4", "e3 c5", "Bd3 Nc6", "Nf3 Bxc3+", "bxc3 d6"]
    ),
    new StartingPosition(
      "E21",
      "Nimzo-Indian Defence: Kasparov Variation",
      "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4",
      "Nimzo-Indian_Defence#Kasparov_Variation:_4.Nf3",
      ["d4 Nf6", "c4 e6", "Nc3 Bb4", "Nf3"]
    ),
    new StartingPosition(
      "E30",
      "Nimzo-Indian Defence: Leningrad Variation",
      "rnbqk2r/pppp1ppp/4pn2/6B1/1bPP4/2N5/PP2PPPP/R2QKBNR b KQkq - 3 4",
      "Nimzo-Indian_Defence#Other_variations",
      ["d4 Nf6", "c4 e6", "Nc3 Bb4", "Bg5"]
    ),
    new StartingPosition(
      "E26",
      "Nimzo-Indian Defence: Sämisch Variation",
      "rnbqk2r/pppp1ppp/4pn2/8/2PP4/P1P5/4PPPP/R1BQKBNR b KQkq - 0 5",
      "Nimzo-Indian_Defence#Other_variations",
      ["d4 Nf6", "c4 e6", "Nc3 Bb4", "a3 Bxc3+", "bxc3"]
    ),
    new StartingPosition(
      "A53",
      "Old Indian Defence",
      "rnbqkb1r/ppp1pppp/3p1n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
      "Old_Indian_Defense",
      ["d4 Nf6", "c4 d6"]
    ),
    new StartingPosition(
      "D06",
      "Queen's Gambit",
      "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
      "Queen's_Gambit",
      ["d4 d5", "c4"]
    ),
    new StartingPosition(
      "D20",
      "Queen's Gambit Accepted",
      "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
      "Queen%27s_Gambit_Accepted",
      ["d4 d5", "c4 dxc4"]
    ),
    new StartingPosition(
      "D43",
      "Queen's Gambit Declined: Semi-Slav Defence",
      "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
      "Semi-Slav_Defense",
      ["d4 d5", "c4 e6", "Nc3 Nf6", "Nf3 c6"]
    ),
    new StartingPosition(
      "D10",
      "Queen's Gambit Declined: Slav Defence",
      "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
      "Slav_Defense",
      ["d4 d5", "c4 c6"]
    ),
    new StartingPosition(
      "D40",
      "Queen's Gambit Declined: Semi-Tarrasch Defence",
      "rnbqkb1r/pp3ppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
      "Tarrasch_Defense#Semi-Tarrasch_Defense",
      ["d4 d5", "c4 e6", "Nc3 Nf6", "Nf3 c5"]
    ),
    new StartingPosition(
      "D32",
      "Queen's Gambit Declined: Tarrasch Defence",
      "rnbqkbnr/pp3ppp/4p3/2pp4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
      "Tarrasch_Defense",
      ["d4 d5", "c4 e6", "Nc3 c5"]
    ),
    new StartingPosition(
      "D08",
      "Queen's Gambit: Albin Countergambit",
      "rnbqkbnr/ppp2ppp/8/3pp3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
      "Albin_Countergambit",
      ["d4 d5", "c4 e5"]
    ),
    new StartingPosition(
      "D07",
      "Queen's Gambit: Chigorin Defence",
      "r1bqkbnr/ppp1pppp/2n5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3",
      "Chigorin_Defense",
      ["d4 d5", "c4 Nc6"]
    ),
    new StartingPosition(
      "E12",
      "Queen's Indian Defence",
      "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
      "Queen's_Indian_Defense",
      ["d4 Nf6", "c4 e6", "Nf3 b6"]
    ),
    new StartingPosition(
      "D02",
      "London System",
      "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 3 3",
      "London_System",
      ["d4 d5", "Nf3 Nf6", "Bf4"]
    ),
    new StartingPosition(
      "D00",
      "London System: Mason Attack",
      "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
      "London_System",
      ["d4 d5", "Bf4"]
    ),
    new StartingPosition(
      "D01",
      "Rapport-Jobava System",
      "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/2N5/PPP1PPPP/R2QKBNR b KQkq - 3 3",
      "London_System",
      ["d4 d5", "Nc3 Nf6", "Bf4"]
    ),
    new StartingPosition(
      "D03",
      "Torre Attack",
      "rnbqkb1r/ppp1pppp/5n2/3p2B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq - 3 3",
      "Torre_Attack",
      ["d4 d5", "Nf3 Nf6", "Bg5"]
    ),
    new StartingPosition(
      "D01",
      "Richter-Veresov Attack",
      "rnbqkb1r/ppp1pppp/5n2/3p2B1/3P4/2N5/PPP1PPPP/R2QKBNR b KQkq - 3 3",
      "Richter-Veresov_Attack",
      ["d4 d5", "Nc3 Nf6", "Bg5"]
    ),
    new StartingPosition(
      "A52",
      "Budapest Defence",
      "rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
      "Budapest_Gambit",
      ["d4 Nf6", "c4 e5"]
    ),
    new StartingPosition(
      "D00",
      "Closed Game",
      "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
      "Closed_Game",
      ["d4 d5"]
    ),
    new StartingPosition(
      "A45",
      "Trompowsky Attack",
      "rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq - 2 2",
      "Trompowsky_Attack",
      ["d4 Nf6", "Bg5"]
    ),
  ]),
  new Category("Nf3", [
    new StartingPosition(
      "A04",
      "Zukertort Opening",
      "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 1 1",
      "Zukertort_Opening",
      ["Nf3"]
    ),
    new StartingPosition(
      "A07",
      "King's Indian Attack",
      "rnbqkbnr/ppp1pppp/8/3p4/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq - 0 2",
      "King's_Indian_Attack",
      ["Nf3 d5", "g3"]
    ),
    new StartingPosition(
      "A09",
      "Réti Opening",
      "rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq - 0 2",
      "Réti_Opening",
      ["Nf3 d5", "c4"]
    ),
  ]),
  new Category("c4", [
    new StartingPosition(
      "A10",
      "English Opening",
      "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1",
      "English_Opening",
      ["c4"]
    ),
    new StartingPosition(
      "A20",
      "English Opening: Reversed Sicilian",
      "rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
      "English_Opening",
      ["c4 e5"]
    ),
    new StartingPosition(
      "A30",
      "English Opening: Symmetrical Variation",
      "rnbqkbnr/pp1ppppp/8/2p5/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
      "English_Opening",
      ["c4 c5"]
    ),
    new StartingPosition(
      "A26",
      "English Opening: Closed System",
      "r1bqk1nr/ppp2pbp/2np2p1/4p3/2P5/2NP2P1/PP2PPBP/R1BQK1NR w KQkq - 0 6",
      "English_Opening",
      ["c4 e5", "Nc3 Nc6", "g3 g6", "Bg2 Bg7", "d3 d6"]
    ),
  ]),
  new Category("b3", [
    new StartingPosition(
      "A01",
      "Nimzo-Larsen Attack",
      "rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
      "Larsen's_Opening",
      ["b3"]
    ),
  ]),
  new Category("b4", [
    new StartingPosition(
      "A00",
      "Sokolsky Opening",
      "rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
      "Sokolsky_Opening",
      ["b4"]
    ),
  ]),
  new Category("f4", [
    new StartingPosition(
      "A02",
      "Bird's Opening",
      "rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq - 0 1",
      "Bird's_Opening",
      ["f4"]
    ),
    new StartingPosition(
      "A02",
      "Bird's Opening: Dutch Variation",
      "rnbqkbnr/ppp1pppp/8/3p4/5P2/8/PPPPP1PP/RNBQKBNR w KQkq - 0 2",
      "Bird's_Opening",
      ["f4 d5"]
    ),
  ]),
  new Category("g3", [
    new StartingPosition(
      "A00",
      "Hungarian Opening",
      "rnbqkbnr/pppppppp/8/8/8/6P1/PPPPPP1P/RNBQKBNR b KQkq - 0 1",
      "King's_Fianchetto_Opening",
      ["g3"]
    ),
  ]),
];

export default categories;
