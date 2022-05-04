import React from "react";

function Text(props) {
  const text = props.text;

  return (
    <div class="likes">
      Позначки «Подобається»: 11 884
      <p>
        safe.life.in.ua{" "}
        <div class="post">
          {text}
          <p>
            <div class="comments">
              Переглянути всі коментарі:784 <p>1 ДЕНЬ ТОМУ</p>
            </div>
          </p>
        </div>
      </p>
    </div>
  );
}

export { Text };
