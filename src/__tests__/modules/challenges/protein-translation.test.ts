import { describe, it, expect, xit } from '@jest/globals'
import { translate, translateRNA } from '../../../modules/challenges/protein-translation'

describe('Translate input RNA sequences into proteins', () => {
  it('Methionine RNA sequence', () => {
    const expected = ['Methionine']
    expect(translate('AUG')).toEqual(expected)
  })

  it('Phenylalanine RNA sequence 1', () => {
    const expected = ['Phenylalanine']
    expect(translate('UUU')).toEqual(expected)
  })

  it('Phenylalanine RNA sequence 2', () => {
    const expected = ['Phenylalanine']
    expect(translate('UUC')).toEqual(expected)
  })

  it('Leucine RNA sequence 1', () => {
    const expected = ['Leucine']
    expect(translate('UUA')).toEqual(expected)
  })

  it('Leucine RNA sequence 2', () => {
    const expected = ['Leucine']
    expect(translate('UUG')).toEqual(expected)
  })

  it('Serine RNA sequence 1', () => {
    const expected = ['Serine']
    expect(translate('UCU')).toEqual(expected)
  })

  it('Serine RNA sequence 2', () => {
    const expected = ['Serine']
    expect(translate('UCC')).toEqual(expected)
  })

  it('Serine RNA sequence 3', () => {
    const expected = ['Serine']
    expect(translate('UCA')).toEqual(expected)
  })

  it('Serine RNA sequence 4', () => {
    const expected = ['Serine']
    expect(translate('UCG')).toEqual(expected)
  })

  it('Tyrosine RNA sequence 1', () => {
    const expected = ['Tyrosine']
    expect(translate('UAU')).toEqual(expected)
  })

  it('Tyrosine RNA sequence 2', () => {
    const expected = ['Tyrosine']
    expect(translate('UAC')).toEqual(expected)
  })

  it('Cysteine RNA sequence 1', () => {
    const expected = ['Cysteine']
    expect(translate('UGU')).toEqual(expected)
  })

  it('Cysteine RNA sequence 2', () => {
    const expected = ['Cysteine']
    expect(translate('UGC')).toEqual(expected)
  })

  it('Tryptophan RNA sequence', () => {
    const expected = ['Tryptophan']
    expect(translate('UGG')).toEqual(expected)
  })

  it('STOP codon RNA sequence 1', () => {
    const expected: string[] = []
    expect(translate('UAA')).toEqual(expected)
  })

  it('STOP codon RNA sequence 2', () => {
    const expected: string[] = []
    expect(translate('UAG')).toEqual(expected)
  })

  it('STOP codon RNA sequence 3', () => {
    const expected: string[] = []
    expect(translate('UGA')).toEqual(expected)
  })

  it('Sequence of two protein codons translates into proteins', () => {
    const expected = ['Phenylalanine', 'Phenylalanine']
    expect(translate('UUUUUU')).toEqual(expected)
  })

  it('Sequence of two different protein codons translates into proteins', () => {
    const expected = ['Leucine', 'Leucine']
    expect(translate('UUAUUG')).toEqual(expected)
  })

  it('Translate RNA strand into correct protein list', () => {
    const expected = ['Methionine', 'Phenylalanine', 'Tryptophan']
    expect(translate('AUGUUUUGG')).toEqual(expected)
  })

  it('Translation stops if STOP codon at beginning of sequence', () => {
    const expected: string[] = []
    expect(translate('UAGUGG')).toEqual(expected)
  })

  it('Translation stops if STOP codon at end of two-codon sequence', () => {
    const expected = ['Tryptophan']
    expect(translate('UGGUAG')).toEqual(expected)
  })

  it('Translation stops if STOP codon at end of three-codon sequence', () => {
    const expected = ['Methionine', 'Phenylalanine']
    expect(translate('AUGUUUUAA')).toEqual(expected)
  })

  it('Translation stops if STOP codon in middle of three-codon sequence', () => {
    const expected = ['Tryptophan']
    expect(translate('UGGUAGUGG')).toEqual(expected)
  })

  it('Translation stops if STOP codon in middle of six-codon sequence', () => {
    const expected = ['Tryptophan', 'Cysteine', 'Tyrosine']
    expect(translate('UGGUGUUAUUAAUGGUUU')).toEqual(expected)
  })

  it("Non-existing codon can't translate", () => {
    expect(() => {
      translate('AAA')
    }).toThrow('Invalid codon')
  })

  it("Unknown amino acids, not part of a codon, can't translate", () => {
    expect(() => {
      translate('XYZ')
    }).toThrow('Invalid codon')
  })

  it("Incomplete RNA sequence can't translate", () => {
    expect(() => {
      translate('AUGU')
    }).toThrow('Invalid codon')
  })

  it('Incomplete RNA sequence can translate if valid until a STOP codon', () => {
    const expected = ['Phenylalanine', 'Phenylalanine']
    expect(translate('UUCUUCUAAUGGU')).toEqual(expected)
  })
})

describe('Translate RNA sequences into proteins', () => {
  it('Methionine RNA sequence', () => {
    const expected = ['Methionine']
    expect(translateRNA('AUG')).toEqual(expected)
  })

  it('Phenylalanine RNA sequence 1', () => {
    const expected = ['Phenylalanine']
    expect(translateRNA('UUU')).toEqual(expected)
  })  

  it('Phenylalanine RNA sequence 2', () => {
    const expected = ['Phenylalanine']
    expect(translateRNA('UUC')).toEqual(expected)
  })    

  it('Leucine RNA sequence 1', () => {
    const expected = ['Leucine']
    expect(translateRNA('UUA')).toEqual(expected)
  })  

  it('Leucine RNA sequence 2', () => {
    const expected = ['Leucine']
    expect(translateRNA('UUG')).toEqual(expected)
  })    

  it('Serine RNA sequence 1', () => {
    const expected = ['Serine']
    expect(translateRNA('UCU')).toEqual(expected)
  })  

  it('Serine RNA sequence 2', () => {
    const expected = ['Serine']
    expect(translateRNA('UCC')).toEqual(expected)
  })

  it('Serine RNA sequence 3', () => {
    const expected = ['Serine']
    expect(translateRNA('UCA')).toEqual(expected)
  })  

  it('Serine RNA sequence 4', () => {
    const expected = ['Serine']
    expect(translateRNA('UCG')).toEqual(expected)
  })

  it('Tyrosine RNA sequence 1', () => {
    const expected = ['Tyrosine']
    expect(translateRNA('UAU')).toEqual(expected)
  })

  it('Tyrosine RNA sequence 2', () => {
    const expected = ['Tyrosine']
    expect(translateRNA('UAC')).toEqual(expected)
  })

  it('Cysteine RNA sequence 1', () => {
    const expected = ['Cysteine']
    expect(translateRNA('UGU')).toEqual(expected)
  })
  
  it('Cysteine RNA sequence 2', () => {
    const expected = ['Cysteine']
    expect(translateRNA('UGC')).toEqual(expected)
  })

  it('Tryptophan RNA sequence', () => {
    const expected = ['Tryptophan']
    expect(translateRNA('UGG')).toEqual(expected)
  })

  it('STOP codon RNA sequence 1', () => {
    const expected: string[] = []
    expect(translateRNA('UAA')).toEqual(expected)
  })

  it('STOP codon RNA sequence 2', () => {
    const expected: string[] = []
    expect(translateRNA('UAG')).toEqual(expected)
  })
  
  it('STOP codon RNA sequence 3', () => {
    const expected: string[] = []
    expect(translateRNA('UGA')).toEqual(expected)
  })
  
  it('Sequence of two protein codons translates into proteins', () => {
    const expected = ['Phenylalanine', 'Phenylalanine']
    expect(translateRNA('UUUUUU')).toEqual(expected)
  })
  
  it('Sequence of two different protein codons translates into proteins', () => {
    const expected = ['Leucine', 'Leucine']
    expect(translateRNA('UUAUUG')).toEqual(expected)
  })
  
  it('Translate RNA strand into correct protein list', () => {
    const expected = ['Methionine', 'Phenylalanine', 'Tryptophan']
    expect(translateRNA('AUGUUUUGG')).toEqual(expected)
  })

  it('Translation stops if STOP codon at beginning of sequence', () => {
    const expected: string[] = []
    expect(translateRNA('UAGUGG')).toEqual(expected)
  })

  it('Translation stops if STOP codon at end of two-codon sequence', () => {
    const expected = ['Tryptophan']
    expect(translateRNA('UGGUAG')).toEqual(expected)
  })

  it('Translation stops if STOP codon at end of three-codon sequence', () => {
    const expected = ['Methionine', 'Phenylalanine']
    expect(translateRNA('AUGUUUUAA')).toEqual(expected)
  })
  
  it('Translation stops if STOP codon in middle of three-codon sequence', () => {
    const expected = ['Tryptophan']
    expect(translateRNA('UGGUAGUGG')).toEqual(expected)
  })

  it('Translation stops if STOP codon in middle of six-codon sequence', () => {
    const expected = ['Tryptophan', 'Cysteine', 'Tyrosine']
    expect(translateRNA('UGGUGUUAUUAAUGGUUU')).toEqual(expected)
  })

  it("Non-existing codon can't translate", () => {
    expect(() => {
      translateRNA('AAA')
    }).toThrow('Invalid codon')
  })

  it("Unknown amino acids, not part of a codon, can't translate", () => {
    expect(() => {
      translateRNA('XYZ')
    }).toThrow('Invalid codon')
  })

  it("Incomplete RNA sequence can't translate", () => {
    expect(() => {
      translateRNA('AUGU')
    }).toThrow('Invalid codon')
  })

  it('Incomplete RNA sequence can translate if valid until a STOP codon', () => {
    const expected = ['Phenylalanine', 'Phenylalanine']
    expect(translateRNA('UUCUUCUAAUGGU')).toEqual(expected)
  })
})