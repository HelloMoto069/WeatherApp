import React from 'react';

//!!!Header
export const MenuBurgerImg = ({ fill }) => {
  return (
    <svg
      stroke="currentColor"
      fill={fill}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 15L17.999 18H21V20H17.999L18 23H16L15.999 20H13V18H15.999L16 15H18ZM11 18V20H3V18H11ZM21 11V13H3V11H21ZM21 4V6H3V4H21Z"></path>
    </svg>
  );
};

//!!!WeatherCity

export const WeatherCityClose = ({ fill }) => {
  return (
    <svg
      width="16"
      stroke="currentColor"
      fill={fill}
      height="16"
      viewBox="0 0 32 32"
    >
      <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
    </svg>
  );
};

export const Search = ({ fill }) => {
  return (
    <svg
      fill={fill}
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 16 16"
      height="18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
    </svg>
  );
};

export const CorrectListImg = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="mdi-format-list-bulleted"
      fill={fill}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" />
    </svg>
  );
};

//!!!IconCard

export const CloseCardImg = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      strokeWidth="4"
      stroke={stroke}
    >
      <linearGradient
        id="wRKXFJsqHCxLE9yyOYHkza"
        x1="9.858"
        x2="38.142"
        y1="9.858"
        y2="38.142"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f44f5a" />
        <stop offset=".443" stopColor="#ee3d4a" />
        <stop offset="1" stopColor="#e52030" />
      </linearGradient>
      <path
        fill="#e52030"
        d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
      />
      <path
        d="M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414 c-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414 c-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414 c0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414 C33.973,30.997,33.973,29.731,33.192,28.95z"
        opacity=".05"
      />
      <path
        d="M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414 c-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414 c-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414 c0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414 C33.425,30.839,33.425,29.889,32.839,29.303z"
        opacity=".07"
      />
      <path
        fill="#fff"
        d="M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485 c-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142 C30.047,15.124,30.681,15.124,31.071,15.515z"
      />
      <path
        fill="#fff"
        d="M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343 c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142 C32.876,30.047,32.876,30.681,32.485,31.071z"
      />
    </svg>
  );
};

export const AverageTempImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <image
        width="48"
        height="48"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAACIklEQVR4nO3VsUvjUBwH8Czn3V+jgn+AgyAieEOahx5HI6Hp0NJk0O3mVhE0WZQTB7VWsS6Kot5ytNmKsSc2tLWvHWoE4eottWACWo28ox4ZqmmreelJv/DdGvrh/X7JI4j3mpnv0a+L0QMpvBvLoy5Gf0gzS1tfiHaIuLK9IJ3AivqnYpgbT2Yr4vLOvOMnVw+nPiGPMxVHTxKN9TmcWisat/mZxMCAUa+2ACN7cWgFXNuLQcKprO9LRSvg+r5U7ADf8gQTOHewM+LX5l2eYKKzg6bIo2PV/MSk8VLl0bEq4VQyAe5OF0XjpWYC3N1/Bfz87cCo17YBYk0mwN02ALwlnEra59esgGmfX3MMCL3eSysgZL2Xju1gweMpWgELHo9zN0kH+JocDg19LLDsueWIWfYc/RbrDsb7+z+dUtTP66mpeyvgdSj0oFBUzIy0PSmXK4z+2AqnPyGnp+9PSXIVC+5oeLhX5fmrRnF6rRc8XzoZHOyxHai4XBs3s7NN4XRRNG7m5gwFgLDtQEjTcrM4vdbc+PiR7cA8w+RaBeYZJocDCNsamKXp41aBZ263bDtQAWBTE4SmcZogGOgFw/OZ4bhSs0CV437/GhnpJnAkRZKRcgO3iF5rORSqKhSF50ONkgagKwWAVA4Gqw3i4sm+vg/YgP+QJBlReb5Ubyc1Qfg7VnQtYseZg64vBYCNM5qWIcNA1KzbLaMXAtvOtUseAfsDlHmPgTRHAAAAAElFTkSuQmCC"
      />
    </svg>
  );
};

export const SunriseImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <image
        width="32"
        height="32"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAADm0lEQVR4nO2YWU8TURTHJxiN6KOJ38AHv4TGB40xJm4hBBHUROq0oYVGEIKSRva2QQmIUo0Y4cXwIMRI6QyFgSqbEJaZUoaytRQUalo3BhAarjnFAVpaSumENrH/5J9M79w559dz7z3TFMP+J10vNOSBsUhUQkFbcsZr87fMN2ZHQjF1B4skJTwynJZpGJu66QcCp2roL/H5LeewSNDVh+SJlPJeMw/HW1TRPxafR54MK9zl7HfHbpV2Dqm03z3gwDB2+3E3c0VBHA8LXJy8LjZZ1dFV8sG5DY63stGJkpSfus7eI47uK5xCoYhJLGrXFtTPr/mD413QYF9LLGxrjourO7BvgNdydS9vqjtm8MqBMfCDt9Zf3mAwxt+HufAMFi7hFf1T3oAwhkWK8ChgiMKjFQxReLSCISq+gLLwPY83jIUaN6qoghVLpaWDsUiVkZDYjIR4NizJx9rkZ4xGxSF/91kqLd1uLELgnaoIMSCW4IC0Dm8YahLZzYbMiz4TExIbctYgsL8qspT0/KA25esQgdcLDsg0p1Yv2p6j6d5cF63DP872iY7w90yUTA6VQ85at72rOEUpDhtJyfvJzqxVbvoZMpLiV4IDmppT1b+nKtwAC9aniCEl8wyBkyOtUstkV7ZrvXrrgHANYya91ELr7jbDXHgG7kEMiCU44AiVnuE0l25ArDlq0Kq9eguUb8OcNcfmZ4gxQkkzBAdkDelJ9uHigEAogO3DJYilZDcEhUNIEUM34T0L1sqQAReslQhiQcygQUbb007BaYUDAfuE1cvuw7eldfjnnxNl2xM6apDLVoWWR8vQEq1C3ECR23ANYy6bxj3H+zmIBTEhNuSAXJATcgODX8C+PtHBQa1oDk4rbGbYL7Cs/AbfateMBi0ySsT1F+5omOOyvfBZSYgNOSAX5BzSiuZ36rXrVWyRX7B056z4XSZHLVoZrwgIxnl5Zbx8x6Wf6slZZVull3a11IxO3OirauC9wHE85IRvyIXpSgR9ctd7ERorQ4rntrYHfln3Csf9s2vGc7mhXTGk2D7dKY/FghE0WI8+56jZ1Z7jAu1JWulxcCAH04STWLAy6VOtHtWzVYUMx21UUeNRRVOLNLh/IeA9uv762gyyPPpEMMA/o54ta7Ira3VXvyPZVpmEIcTWOabQ/T7dGmSRUQkGuESrth0UB6tGDCGeNeml+UGB8eYGigUD5Ab8vzJ5UGjgQS17uPQXbJrZ2yEK1WYAAAAASUVORK5CYII="
      />
    </svg>
  );
};

export const SunsetImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <image
        width="32"
        height="32"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAADl0lEQVR4nO2Y309SYRjHz2y1fly29R900X/gVa05WkNd/pwXVk4tgjNBHZbp1thqSoqpyyyt5YXedVNrSwFRypamKT/OQTiIgnC0kIabyVFT5tse7CggqOiZsOl3+26H97zneT487/s+h4FhR0Fj6ekz1sJCR7BhDEsU2YqLHctNTSjYMIYlimzHgAeU7biCB5TtuIIxaoTPf2PMyXGzPc9dVbUY3mZgjL0Pc+EZ7LCEZLIkQ1ZW90JNzXo4WLj/yOXrRHZ277vc3BPYYWowOfkMmZc35FMoosIxDQ0I5hh4vHNYPDScknJ+PD/fuNTYuA0Oxiz5+eQ3Hu8CFk/pUlMvWgsKJsIBJ4qKbGN8/iUsEaTLyLgyjeM0C2fH8Z/6tLRrWCJJl5l5m5ZKf89KpV5dZuYdLBFlzMp6DI43x7GOrihtaRkYS1SZVDhtUolm45Lc9rn8qskkOxXtPqUtLfOYahF4pypCDIjFOSChFH4w9gg8EwP30yImVuE0mu9E4GhVpLTi64buu7+MKuF7zgHJ3pKOJfoVcv145CeUwq+zo4Kz7D2zVlIOlUPzXQGHV9GhlZ02qfGP9sHKNcb1EpnUorecA5p7SxSLjpYAgM/5ApFqfI5UCdWWfvG0feihf6N6G4BwDWNmjXiaUN7rhbnwDNyDGBCLc0CLtqxifuLZJsS6txOteTqCoCIb5qx7tz5DDItWXME5IDVQdsszLt8VCO1iz/hTRGklNzmFQ0iWRPQIh33O1gMD+pytCGJBzJhBrF9KL8NphQMB+4TSSB7AtyWUwpGFqebtCb2dyE+3oRVrM1om6hGjrw0YrmHMT7cH5oQ/B7EgJsSGHJALckJuYIgKODoqOGnoFrjhtMJmhv0Cy8pu8GD7Z9rRElmHGF3NjoY5fvp1xEpCbMgBuSCnsVswt1Ov3ahiXzl/+nv1atRl8nah1cmWXcGYMK9OPt9x6R3D1WtUv/jGnpaaVIo+RaoaeD9wDAs5FRnS52pF0Cf3vBehsZJqkTu4PbDLul845r/9M6HLDe2KVIs8rsHyM1gsggYb0ue8nXvac8xue5KoCzk4kIPsEaqxWGXWlDhDqke3HRiO2axie0gVzX3i2P7shPfoxutrK8iKtYkzwL/W0JZlH6pc29PvSKpfgpMqkdNN1gTep8FBlsh6zgCXifptB8VLKRCpEs2aNeInMYGxZvRyzgAZffRXJgsKDTymZY+X/gHnBspMufxVhAAAAABJRU5ErkJggg=="
      />
    </svg>
  );
};

export const WindImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <image
        width="48"
        height="48"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEpUlEQVR4nO1YWUwbVxSdtmoSdY+qqlUrVepPl498tr/9iNrPfKVqv7qoVVWlolFKWjAxHm+YxRjXYYuDg7HHy9jYxguGIFBNgYDHnsW7x4ALgQSnQMziUjVVyFTPjVNEDNjGJZbKke7Xe+/Mefe9e++7A0GHOMQhigO2fPwEB8GreQjZUqXEPj/T4nqmEJ7vm0fe5CjdX3K1hIyHECK2wnMKNoaOFCzsrNT1glBP9V8evr7cE15lHFMpBiUXNyV2moZV3m9y5alGsJMi1Dcsd80uG/230zxWeo3ReBJ3mmx0DNZ4f4KVrmN5iQM7E6B+zEavM874xkN2ZXQ+mYtIvoZkXRqaTWTjyJgpmLwnRP1uVsfEyzkL5GuIGlMwefe+mCWhwefkaUhDQ084mBEtsUfocvHA0ztxsLs8Z5XjN1fBXMdkimkZiN+oNQau8rU4KtRT3WJLmNITi3cy40I95S6T9R3NUSApNYdWNjVYIgUjeNXWYxdbIyFAihKLmxc6sc+yrWfJRl5qtEWnwTxrdC398Qr56Otb58Aw8ziMEFzFyNwtMM8cTG7ytYQ4J4FgJ+Ai81T4mYfEa0k0veupFMPVEK3Z1rOvuE/riN/u9cY3mHpTMLhbYMFqnI9SS2lPNtmi0a/l+JPQflBr9A8Asp7oGsNFcEHWj8rxpwQG6mqdKeCpRjzv7sb3kdH4hNga8QFOtXvhz0qF+8OChJXJ3M9x1USN8tqNJCDrGL6erJCPn4CKAJGBMqc3HVlleAjOeTDAVnjeqjOH/BI7PbOXtQ7E542B5XTg2Oh1Rqil+qEiga+ldIDXPplieAjZ9GCAqyGktlhqxxSQzcBlrkH9WGXb6PFiCaw1BYYAd3cgyVRvTV/Ag/WmkE/mjE3tZU29sckGcxjjImR93ol1F7CU195uH/r1JhDYPhhPnGsffw0qFVS2jR4XoX4vyAi9078zQtQ3DJUCzre4XuF0EecarOFg5oq1DsYXqjq87+24iK8j2hptkXguASPZhzU56BlwlN3+25v/ls65JZ4aP7/rrqQOOpZPsDiLYJbIKtNoC9NstffTPd0OPCh1xiZzCRjZPkzaG5uWOuhQnTkwwlMTDSC/FnRPDlEo8qkuku0BYKenxT0Rkq/zGX/smHgH+i9QSHVxbjOQ01oH4wnwriy6wHyqi2ybXeyfmlVNJDaAQCAU8dzagBFCBJUKymR9R1kK7KRAR+GW0MrdTAIG5QwqJcDG0BGhngoAT4IyJtD6DFCpobpj4gNw3MCLjdYwAZUaYKXr2MW+2BwQKHXQUwf68R8UY8+yFBOfgOZoxznNY69e+nkm3RBJ7NHwgQoUor5hA7XE1JtCgQo5/ny2ORwEbzaHV9LRLDL6XQcqsM4SJNItJb3O8LWkC3h06zi7C/uqbTCefoSivqW/OBq8/EAFclTEx51j8yv/iFwD7WKsxuiz8DSETtQd+CUzBqK4xuD3gs4NOmgItFRj5/0OL5uBalRnCobLL7vfgB4VOGriiwZLiFBhC3+Atx3IeaDxAb85BHqyp7IZexF65GCYx1jy8fe5KuoCX0c2c9Seb7/L50fQIf6v+BvJyy0iOVi5jwAAAABJRU5ErkJggg=="
      />
    </svg>
  );
};

export const SnowImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <image
        width="48"
        height="48"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE1ElEQVR4nO3XW2/bZBjA8QBigg+AlHTbHQeJ7lOA4JJNMPgUVEVcABJXcAEaSBViE2jJDhdMaNI0bkCFaQV1PbAkTZyTnThxnMRO4pxs55zYVseDXr+J6ybNoUnUZlMe6a/lqvo97/tWzSyWxSxmMYt5JgYAXt/f3/9C07QHmqZxmqY1VVVTVFUVVFV9qCjal4qivGGZt1FVdVlVtd9VVX2iaRqoKkoFBaWgFGh3arXa/7VarT/qqro8Dyf+nKIon7cVReliu9B2W4FWu41rtaHZauk1mqgm1BsNrdZofIZ+xmnhX2gpyo1RUIzt1oBaHVet16Faq0OlVr+JftaJL9BotdZ0bNN8qv3QWgeKsTWoVHFlVKWqJ1cqayeKr9WaH0wGrYJcroDUTS6D2KkkympJkhtFSaZLovxrUZI+AoAzM8cDwMvVWo0zsEOg8hFQUSpDSZJxogxFUdIrlFCiXr6IKkGuWIoLBfH9mS4gVyofTwMt9kFFjC10K4KQx2XzBcjmUPnvAeD5mSwgyRWPJJuws4LmMTajl4eMkIe0Xg74bA64jHBlcrQkXShJ5R9LohzsYg2o6frzh6//AGpgh0PTWYzlswICd8pCKo1L8tlLx4Ink8mXiqJ0rVASnwx5pzOCCgYUYzNGCS6tx6bSDEmSZ8bGF4rixnBocWwofxwoh7C8XhyVRHHAoBLch2MtkMsXfzoKmp05ND0ICkwiBTEUm4Iom8QxiTsj8YIgvJkR8k8GQ3PHgiYmgcaTQOslgGYSENFjgYrF6ZELpDPC1aOg3EBopg/6zj0e3r03DJoaCo3EWAjrxYGKHhSimdrIBbh0Jjwu1HyiuzQH325ysBflwObg9dw0B99spmCHSo2AsoegJM0YhegYhCIxCEZiEAhHRy/AptKNXijbe/WdU42ZTvXTBykd/dptjEe92vn8yV/JA6jpVMloPxRjoxAMRxEYR9Hgp2jwUZHIyAXiKa42DNp9p8aJxvGJbpEJuPQbXsLcxfsp2AzGB0BjR0L1yAj4OhGhcLdfRi4QZZNU/y/UAbR7/eGed7oZZHVs7wLv3U/CP35mLKjvAAreIIrS8wRQJOwFyMsjF6AZ9odh0EFXv/pnAj+bW6Yn1Pm8ss72QCNDoR6E9aNC4Eb5QuAiQuxYf8jC8fgFkmb2MdYMZfqu3jhVioa/iSh8vcHCIz9tLLDpo+Grh3HY8EZGQEmM9XWwviC4CJyTCIDTG0D/XrSMO8FI7Nog6MHV00eeKBEMw1t3k/D23eRkUG8AHnv98Njjh3877bqJ432ZQ1flJyMbo6BTnagODehQA7vng91ubgJ23ARsu4krE32dRksQIeoqEaT2D0OpgVA3gvpMUMIEPXSqJugehuK8sO3Cbbk8zCMnMf6zGTQuH7Xs9ofW9nyhkMsXrM8GShjQbSNPfcvpjWw5vXe2nMRlj8fz4tT4xTzrY3Xwu1Y7v2N5mmbpVua87Tq3ar0pvNL9e6F/vs6tnrWnz1nmfWwO7jsdbefLxgKdz1Y7N/l/3k9q0CnbHNx673cmm4NbP5UbOO471p/QaS+wNMU7nosnZJsCce5n/qzNzq/0LW/nV87f4JaeqndstfM7Vge/bTnpmYt3PM3MxTueZubiHc9qTu0dL2YxlpnM/8cbDEQQwtMuAAAAAElFTkSuQmCC"
      />
    </svg>
  );
};

export const HumidityImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <image
        width="48"
        height="48"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJklEQVR4nN3Y609aZxwHcLPsRZMlW5YszS7Zi/0F25u93rL+B3u5NNuSCWjRJksR2zE9rYoiWC4pHNS5MgSlQ7Mq3krroB5AXOWmyFCBaoUCszNW1wZEym85BBZUhMM5gMl+yTcEzuHJJ89zngvU1Pwfq7nP9larYnGuUbLwJtW2rBcuXD8tpBpEEHitQ+O6P+OPQeedpfv4+woBgVSDN1QOqW71nzgWBRj37h+0qx23aipQpIBtasdXKmtkB8dlo5x/uo0o7V+eOZDTv/CR9J7fn4vDMhFP+vxNA+b3zwyIIMbXedrlhYfhVydwWBTAGEpC5x0XVobnEXJD+IvtGqdsav1lMh8Oy2Ri9UW8Te3sogI8jiV0I2fQ9oXSEo4WwmGZDGDBSMvtR59WDXhFoH+j5+6fS0RwWBRgLgLAG3HbEYXxXFWAHRqXSr8RTxEFYlGAad/LZNuQU04SRXwd5CgWP1dZo3+XgsMyuW0KhZH+Pz6pGBCftfzRFfscCRyWGequ0WULlVldEHhD7eBPrr84JIPDMhnz7MVaB23Xyg5EUMt5VB/YpILDMhFNrPmuoqa3ywrkjbjVhlCSMg6LAsxuJaBTs9RbtoUa385u6QMRns4PnCEvNCk9wFJ40q9XVR7o1vlh9slhSUj5g41NltT4bqk9yELNJ4F1YusWe3AVOnXPQDDz/ES449vQ9MtKGvp7kFgvG4JJ6BhyDlMG0riGz77/2fMqH+x4Ou7+BSzFCvRMPQbD0/z7czb9pgh8KzAdXuy69zElIF1s3uia3CmKOwIdiwJL4Qbubz4YWd5L9+qDJwkYde9B96Qf2MoVaNFuQZfuGdCE8+58kCsy0/V8OQL8BjGeY6L2g1JwueFN7ABnOADNSi+wlV64NhxIPw6591yS2mL4+koKWCswdv/46xYpnIBgOJrHqdpuww+khpghnt/kT+9WFMif2gWG2BogBWRKF/criRNkh1m2uEcK2NDriFcDeLnXES+Gys1/Fxr7nIlqABv7nAlyPYg6YtUAMlF7jBSQKbNV5xlEbeSeQYZkIcyfrjRwFxgSa7gQ6tR1kNbzUN6qDVUU2KINAk2ASUkBLyL6841yV0UnSoPcmaD3GN8hNcTpXhSaPdyxo9tTucId2wa6KP9eTBhY3z734SUK+7GgQJgy+wFdOPMeJSBedJFZxlatEzpyEU2zci1VL7agRFF5F+rcoonMttYyHRxatEGgi0yPSum5gj2YrXqxBWMPrqUo9ZzKl6IJza4akj89CwLxqpNY+vEz4vFzXdEJMb6N7xgHdRILqX8XCAOzE4cumvde7nMlkJEQnLaY86efA34dX6roIovn65uzHxCFEDqwFit8nfxOiA0wJNZIg8y2j+/dDajjMP0qs+3jn9fexH7C7yPcaBEgnlLbOpP6F6g1Ex9mcV8yAAAAAElFTkSuQmCC"
      />
    </svg>
  );
};

export const PressureImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <image
        width="52"
        height="52"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAACT0lEQVR4nN2Wv4vUUBDHc4oo+KsQK8XCQlAUBBuxEQwHwu68rMj+AYJeo4Kw3m1m7jDXer1aXHGClT8QdWcCIriFQpqrBH/bWakIaqOIEnnowbok2c3wEsEvTLG8z4RPXjaT53n/T9IJQJlxzSS+P59XpfSOno3XGuJvrpkkXzAtJxjFmwzy5zoYm/KCGG81xO/rYFSCx2bi7UD8tg5GJdia491A/LJKJvH9dLBKCQLKJJA8rIOxKS1oUE4Zkqt1MDaKHeQrQL1zdTA2mkf8LJjlQ1UyiXYONrC3F5A/tts3VlfJJFpBg3zBoCzVwayklCAgP4FZOVIHU1oQKD5oiF9HUbSqakYlaEiuA8mZOpik7KBuUG+b/W62o/6GqpnhnL/8eLSgIb4IKAt1MKUFJzv31wPyu2b33o6qGZVgQHISiG9WzXQuPZrPqpGCQLLcxNivmuloBAPi/YD8pmgkuGLyUigIyIuGeDoXcMgoBNMJg/LBjobcbmeMQjCYk30G5VVBrzMmS2qwvKwYlNP20WQuOmaKki9Ics2EcqKo2RWjEgSU/uhTiRtGu4PPDcZ7ippdMcMZaw7aE28rvL0lc9ExoxI0yF8PR/11mYuOmaLk7yDx96mp5TVFza4Y7Uvyc9SnyRUzlmAj5J1A3F0pQ5IO/rbrrhhPN6jtJ4lv2QsOF5Dc/b0LrhjlIzbTdzYC8dO/Lor8ot19sNk1o/4PtkLZBcSf/tzxl6wZ5opRvyQBxQAkP5okx/MaXTHqA2sr5AOZCxUwXoGgrXH6/3l+AWaATinY0Ne/AAAAAElFTkSuQmCC"
      />
    </svg>
  );
};

export const PrecipitationImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <image
        width="40"
        height="40"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAADSUlEQVR4nN2WS08TURiGGxfqDzDGhS4MceEKov4P2WAiBBsl4i/QkLAAMYqpJiaEBYk3IlgVISZcaum0TC8zbWemLb1BmTOdzhztBVpawIWJERxzsCW10NLLdIp+yZNJ03ztk/Od855Rqf63mrWFLhsY7qXZzZM2r+gn/EKE8AlBsydCGGkwOm1fvtQYMQd70URzBg+XyAjJLQmmvu1DTG5JHhBPmxjeqCNAk2JyenuonQhAUSwiBg8QdQS+QD0FOhSRc63E1soRgwW4QXzVQHOddR0rWrlq5GAWMgCFGcfShboIGhkOK3essMS4MZozyC43R4SuoANRixzMjZqNZWZsgWZZBTGKfSWs1bZ6MAs69Zgr/FxWQZRzcsjBLI4l+JXwiyzhFwC+GCH1NDug04ETVQtafUJATkFYABtL7yy4wm6dE5ytSpD0Q76egjB7gBaYsGsiGDxettgsxbZgNKetNvtghYBoemeeCvUfKob2g5Hmxl1sNFlrtMAKwT08UVIOx4WTGA0sIJb5paQYzOLlE2mLh3cYKDAyiwfP7BPEKKDlYumGyME8+NVNifBDfp5mu/fk0OuRm42vN1oO5uEBiZSe4m7/WT0GfFB6z8EyIAMCP0V6T6ssixFXo2XgQeNObKI7fERF+EXQaBlYBNzDO5Eg22gRWATkhkbMNFoEFoH0wxUVRgPtUTwkMDfiTwTbwrBRRa41WGEmouDOBjU3BmKZnVp+UExuSQ+1i5I3kpJFkPAK/DS+cmpXEL1NYBRnBrHMdrVyg+98Us94WJqw8jXLuUF8Xe8M3frrustKjjGh6Fqle3J4elkamIpLGt2GpPkYrGmsaOX2yeXXjJNtNtLcW4s3QhM+kSUDIleK1/pgvHcsvP3k86aE6Hnh/n5YTyHofyzeiB3tub2xylVqDenMySG6nlFe1VGq7iEXyBdEn1VHqdQa0qyZ29iVQ88bGhJXXKKvr+/Ytfum91d79ecKv2t9YGpCUneGXCx6tvXOn6+kXxa5jkfWyXtvuJ9t/QtdSvcfWp2PrcP9k7EfKELaB21apftL1vUBY+vdUS6VOwA3n9pNSvbXPULU9Y6gWiOku94RVGuEqOsdQeVEiKqO/f9E/QawSXm9HzUJygAAAABJRU5ErkJggg=="
      />
    </svg>
  );
};

export const VisibilityImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52">
      <image
        width="52"
        height="52"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQElEQVR4nO1XzW8TVxD3hYr2WI6o7T/QQ6W2h1aoHGi+sNebSoAQlwouCPXYe3IgTZfsrtOSIIwEiVqBnQonuXAkQJN4vW/jEEKCPwrEgTihVRx/O9iJd6caG1ve9a7jmARx8E8a6ente29+u/PmtzMmUxNNNNHE+4mT3YsftDCeDpongyf6pXkrT2IdlzxbaDjGOXzW2iu0f3nNe+CdEfuemfoUHVOcmP5p+HH8L09YfvQiAdH0FuS25YLheG45ASNCWMY1FlZMWXnxcutF6ZN9I3aslxyiOPEqxYrZaxPLuf8SWagX/8azYL8byllYMUtx4pVWXvh4T8kdZ4RTFEsS3aOBTXRWgqwAPIsqcHdJgZFFGa4/LBqOcQ6f4ZoSIskccHeeps2smGxjxPNvTexo9/2DVp6MnBmczQTXUqqv8jyqgGNBBru3tuGapVgFSwDwr6bgzODsZqeNjKCPhsiZe4TDnby02OUKpFPZ7fLhigIgrCg7ErNrzLOiQCXNzVweesaDGdomBY+z7s92Ra691/21lSPR8Zm1vPY+NULO/sbEsPpLIkal1Tz6Qp91kWtl3N9SHEk+8K1XnYZhrYfIqF8B/4YCgYgCLr96T0gTbsR0IKLQPEm29U5/U5Ncy6/u72iepOdfJKoOwctez52ze+UCsVC8aP6ImuCtBVmVOCXMLccBfbczniP65H5xf45fTnoWq94NxWw1ItQ//RrODgXAzEoFe/xqy5AgGkZCD7OhOFg5kmrpm/6iSnwpjmz8jacZAGXDiBzFzUAb4ynbzw4/zK1mwbcug8tXvW9iydAN4NWycmQDORXIYZrTPPHdnFrZMtwFAE6D8J4dCqjIVdq54aDuHtTJWvhj6uU2zZN/LN3ej0w/2CRH121/xvidirjxUJ+gmZUMCZo5SXcPnlULyKVnPIg66TJ12qRb+0XQYkBwaG5nghfHgunOfulmOcR/Tr6sHeJFgxDf2IcQTxZDfJIXPlQniY727ZQk3GQaLLw6SdAofgb63a9199RKkvtP1hWKEyPlJNHKDGlQZs4NBwt3Dg3HRuRqyYx3KQ6UnsxohRprOS1QXI0y2b4LcxgIdUkDDYW6rImXyFc0TxL3nlSHG6uStyUY0vnVTdX7qysBf9wUJ8bGpOpiAauSvSwWXGQ1j77qLhZU5ZaNLHTd9qvLrQZJimF1uZXJ5qFnrMFyqwSUIIojztMD3jQWmZXAUDnruJO4RhtWXzgJpy97M1aeOBouWPVK/i5XIKMt+Z9HlYJsoLahmKPhGOfwWWVCrCdzwN55mrKwYqydEX407SWw0TH3iVew8bFPLOdeVRDdCWuxLFx90zRZ+sjAnjdNlUABxRYSW8kLQ/NxpxCWsZaLpHLlthPHOOcUVmRcg2tpTvx9X9tOLbAZb2E8HVaODGgbd5on0RO/zTwq9MLvunFvookmmjDtCv8D/He2BksEHYwAAAAASUVORK5CYII="
      />
    </svg>
  );
};

//!!!Footer
export const ArrowUpImg = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3.95312 6.37988L7.99979 2.33322L12.0465 6.37988"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.667L8 2.44699"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const GitImg = () => {
  return (
    <svg
      height="28"
      viewBox="0 -3.1 2490.3 2493"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="1245.2" cy="1243.4" fill="#fff" rx="1217.6" ry="1246.5" />
      <path
        d="m1245.2 1.6c-687.6 0-1245.2 557.4-1245.2 1245.1 0 550.2 356.8 1016.9 851.5 1181.5 62.2 11.5 85.1-27 85.1-59.9 0-29.7-1.2-127.8-1.7-231.8-346.4 75.3-419.5-146.9-419.5-146.9-56.6-143.9-138.3-182.2-138.3-182.2-113-77.3 8.5-75.7 8.5-75.7 125 8.8 190.9 128.3 190.9 128.3 111.1 190.4 291.3 135.3 362.3 103.5 11.2-80.5 43.4-135.4 79.1-166.5-276.6-31.5-567.3-138.3-567.3-615.4 0-135.9 48.6-247 128.3-334.2-12.9-31.3-55.5-157.9 12.1-329.4 0 0 104.6-33.5 342.5 127.6 99.3-27.6 205.8-41.4 311.7-41.9 105.8.5 212.4 14.3 311.9 41.9 237.7-161.1 342.1-127.6 342.1-127.6 67.8 171.5 25.1 298.2 12.2 329.5 79.8 87.2 128.1 198.3 128.1 334.2 0 478.2-291.3 583.6-568.6 614.4 44.7 38.6 84.5 114.4 84.5 230.6 0 166.6-1.4 300.7-1.4 341.7 0 33.1 22.4 72 85.5 59.7 494.5-164.8 850.8-631.4 850.8-1181.4 0-687.7-557.5-1245.1-1245.1-1245.1"
        fill="#2977bd"
      />
    </svg>
  );
};

export const LinkedinImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="34"
      height="34"
    >
      <path fill="#2977bd" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
      <path
        fill="#fff"
        d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"
      />
    </svg>
  );
};

export const TelegramImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="34"
      height="34"
    >
      <path fill="#2977bd" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
      <path
        fill="#fff"
        d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
      />
      <path
        fill="#b0bec5"
        d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
      />
      <path
        fill="#cfd8dc"
        d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
      />
    </svg>
  );
};
