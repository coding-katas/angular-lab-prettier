import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <h3>My site &#9752;</h3>
    <ul class="nav-item">
      <li class="nav-item">
        <a class="nav-link active" (click)="onNavItemClick()" routerLink="home">home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" (click)="onNavItemClick()" routerLink="products">products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" (click)="onNavItemClick()" routerLink="users-list">users</a>
      </li>
    </ul>
    <div id="icons" class="btn btn-dark" (click)="onNavItemClick()"></div>
  </nav>
  `,
  styles: [`
    * {
      padding: 0;
      margin: 0;
      font-family: "Segoe UI";
    }
    li {
      list-style: none;
    }
    a,
    a:visited {
      color: white;
      text-transform: uppercase;
    }
    a:hover {
      color: orange;
    }
    /**** NAVBAR ****/
    nav {
      background: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      font-size: calc(0.5rem + 1.5vw);
    }
    nav ul {
      display: flex;
      justify-content: space-between;
      width: 50%;
    }
    #icons {
      cursor: pointer;
      display: none;
    }

    @media (max-width: 650px) {
      #icons {
        display: block;
      }
      #icons:before {
        content: "\\2630";
      }
      #icons:hover {
        color: orange;
        background: black;
      }
      .active #icons:before {
        content: "\\2715";
      }
      nav ul {
        position: fixed;
        left: -100%;
        top: 5%;
        flex-direction: column;
        background: black;
        width: 100%;
        text-align: center;
        transition: 0.25s;
      }
      nav li {
        padding: 3px 0;
      }
      nav li:hover {
        background: white;
      }
      nav.active ul {
        left: 0;
      }

    }
    `]



})
export class NavBarComponent {

  onNavItemClick() {
    const navElements = document.querySelectorAll("nav");
    navElements.forEach((navElement: HTMLElement) => {
      navElement.classList.toggle('active');
    });
  }

}


