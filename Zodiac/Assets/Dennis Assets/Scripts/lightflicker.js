public var minIntensity:float;
public var maxIntensity:float;

function Update () 
    {
        if ( Random.value > 0.9 ) //a random chance
        {
           if ( light.intensity >= minIntensity + 0.1 ) //if the light is on...
           {
             light.intensity = minIntensity; //turn it off
           }
           else
           {
             light.intensity = maxIntensity; //turn it on
           }
        }
    }