import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import {
  useEditArticleMutation,
  useGetArticleEditQuery,
} from '../../services/article';
import { Editor } from '../editor/Editor';

export const ArticleEdit = () => {
  const params = useParams();
  const [content, setContent] = useState(null);
  const [reason, setReason] = useState(null);
  const {
    data,
    error: initValueError,
    isLoading: initValueIsLoading,
  } = useGetArticleEditQuery(params.slug);
  const [editArticle, { isLoading }] = useEditArticleMutation();
  const navigate = useNavigate();

  const onReasonChange = (event) => {
    setReason(event.target.value);
  };

  const onSave = async () => {
    if (content == null || reason == null) {
      return;
    }
    const form = new URLSearchParams({
      content: content,
      ordinal: data.ordinal,
      reason: reason,
    });
    await editArticle({ id: params.slug, form: form });
    navigate(`/${params.slug}`);
  };

  return (
    <div id="article-edit">
      {initValueIsLoading ? (
        <>Loading</>
      ) : initValueError ? (
        <>Error</>
      ) : (
        <>
          <Editor initValue={data.markdown} onChange={setContent} />
          <center>
            <hr />
            <p>
              Reason:
              <br />
              <textarea onChange={onReasonChange}></textarea>
              <br />
              <Button variant="primary" onClick={onSave}>
                {!isLoading ? (
                  <>Save</>
                ) : (
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
              </Button>
            </p>
          </center>
        </>
      )}
    </div>
  );
};
