// import { Card, CardImage, CardContent, CardHeader, CardMeta, CardDescription } from 'RSU';

class CardExample extends React.Component {

  render() {
    var Card = RSU.Card,
        CardImage = RSU.CardImage,
        CardContent = RSU.CardContent,
        CardHeader = RSU.CardHeader,
        CardMeta = RSU.CardMeta,
        CardDescription = RSU.CardDescription

    return (
      <div>
        <h3><a href="http://semantic-ui.com/views/card.html" target="_blank">Card</a></h3>
        <Card>
          <CardImage onClick={Alert} src="../assets/images/kristy.png" />
          <CardContent>
            <CardHeader desc="Kristy" />
            <CardMeta>
              <span className="date">Joined in 2013</span>
            </CardMeta>
            <CardDescription>
              Kristy is an art director...
            </CardDescription>
          </CardContent>
          <CardContent className="extra">
            <a>
              <i class="user icon"></i>
              22 Friends
            </a>
          </CardContent>
        </Card>
      </div>
    );
  }

}
