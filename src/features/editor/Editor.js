import React, { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import './Editor.scss';

export const Editor = () => {
  const initValue = ''
    .concat('---\n')
    .concat('Titre: \n')
    .concat('Description: \n')
    .concat('---\n')
    .concat('Il était une fois');

  const onChange = useCallback((value) => {
    console.log(value);
  }, []);

  return (
    <CodeMirror
      value={initValue}
      extensions={[
        EditorView.lineWrapping,
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      onChange={onChange}
    />
  );
};
