import nltk
import sys
import re
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize,sent_tokenize
from nltk.corpus import stopwords

def freq(words):
    dict_words={}
    for i in words :
        if i in dict_words :
            dict_words[i]+=1
        else:
            dict_words[i]=1
            
    return dict_words   

def pos_tagging(text):
  pos_tag=nltk.pos_tag(text.split)
  pos_tagged_with_noun_verb=[]
  for word,tag in pos_tag :
      if tag == "NN" or tag == "NNP" or tag == "NNS" or tag == "VB" or tag == "VBD" or tag == "VBG" or tag == "VBN" or tag == "VBP" or tag == "VBZ":
          pos_tagged_with_noun_verb.append(word)
  return pos_tagged_with_noun_verb  

def tf_score(word,sentence):
    
 


def idf_score(word,sentences):


def TFIDF(word,sentences,dict_freq,sentence) :
    tf=tf_score(word,sentence)
    idf=idf_score(word,sentences)
    return tf*idf 
    
    
    return 0


def sentence_score(sentence,sentences,dict_freq):
    sent_score=0
    regex = r'[^a-zA-Z0-9\s]'
    sentence = re.sub(regex,'',sentence)
    sentence = re.sub(r'\d+', '', sentence)
    pos_tagged_sentence= []
    pos_tagged_sentence=pos_tagging(sentence)
    for word in pos_tagged_sentence :
        if word not in Stopwords and len(word)>1 :
         sent_score+= TFIDF(word,sentences,dict_freq,sentence)
    return sent_score


Stopwords=set(stopwords.words('english'))
wordLemmatizer=WordNetLemmatizer()
#text=sys.argv[1]
text="my name is my  aayush"
tokenized_sentences=sent_tokenize(text)
#for removing special chars
regex = r'[^a-zA-Z0-9\s]'
text = re.sub(regex,'',text)
text=re.sub(r'\d+',"",text)
words=word_tokenize(text)
x=freq(words)
print(text.split())
