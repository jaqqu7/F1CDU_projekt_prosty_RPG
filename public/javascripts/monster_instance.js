/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global defence, attack, loot */

function monster_instance(monster_name, hit_points, mon_attack, mon_defence, mon_loot){
    this.name           = monster_name;
    this.hp             = hit_points;
    this.attack         = mon_attack;
    this.defence        = mon_defence;
    this.loot           = mon_loot;   
    };
