import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import './Editor.scss';

export const Editor = (props) => {
  return (
    <CodeMirror
      value={props.initValue}
      extensions={[
        EditorView.lineWrapping,
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      onChange={props.onChange}
    />
  );
};

Editor.propTypes = {
  initValue: PropTypes.string,
  onChange: PropTypes.func,
};
